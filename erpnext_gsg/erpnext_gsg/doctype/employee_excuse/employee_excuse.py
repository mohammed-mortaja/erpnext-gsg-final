import frappe
from frappe.model.document import Document
from frappe.utils import flt, get_datetime, now_datetime

class EmployeeExcuse(Document):
    def validate(self):
        # get the employee's department
        department = self.department

        # get the number of hours allowed for excuses in the department for the current month
        allowed_hours = frappe.db.get_value("Department", department, "excuse_hours_alowed", as_dict=False, cache=True)

        # get the current date and month
        current_month = now_datetime().strftime('%m')
        current_year = now_datetime().strftime('%Y')

        # calculate the total hours for the current month
        total_hours = 0.0
        for d in frappe.get_all("Employee Excuse", filters={"employee": self.employee, "department": department,
                                                            "excuse_date": [">=",
                                                                            current_year + "-" + current_month + "-01"],
                                                            "excuse_date": ["<=", now_datetime()]}, fields=["hours"]):
            total_hours += flt(d.hours)

        # check if the new excuse application exceeds the allowed hours for the current month
        if (total_hours + flt(self.hours)) > flt(allowed_hours):
            frappe.throw("The total excuse hours for this month exceeds the allowed limit for the department.")

        # check if from time is before to time
        from_time = get_datetime(self.from_time)
        to_time = get_datetime(self.to_time)
        if from_time >= to_time:
            frappe.throw("The 'From Time' must be before the 'To Time'.")
      # calculate the number of hours
        time_diff = (to_time - from_time).total_seconds() / 3600.0
        if time_diff < 1:
            frappe.throw("The excuse should be for at least one hour.")
        self.hours = time_diff