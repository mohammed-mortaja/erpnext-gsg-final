import datetime
from frappe.utils import time_diff_in_hours
import frappe

def calculate_working_hours(check_in, check_out):
    if not check_out or not check_in:
        return 0.0

    time_diff = time_diff_in_hours(check_out, check_in)

    return time_diff

def execute(filters=None):
    columns, data = [], []

    columns=[
        {'fieldname': 'attendance_date', 'label': 'Attendance Date', 'fieldtype': 'Date'},
        {'fieldname': 'employee', 'label': 'Employee', 'fieldtype': 'Link', 'options': 'Employee'},
        {'fieldname': 'employee_name', 'label': 'Employee Name', 'fieldtype': 'Data'},
        {'fieldname': 'check_in', 'label': 'Check In', 'fieldtype': 'Time'},
        {'fieldname': 'check_out', 'label': 'Check Out', 'fieldtype': 'Time'},
        {'fieldname': 'working_hours', 'label': 'Working Hours', 'fieldtype': 'Float'},
        { 'fieldname': 'view_attendance','label': 'View Attendance','fieldtype': 'Link',
          'options': 'Attendance','target': '_blank'
        }
    ]

    # Get the filter values
    from_date = filters.get('from_date')
    to_date = filters.get('to_date')
    employee = filters.get('employee')
    department = filters.get('department')

    # Build the SQL query
    query = """
        SELECT `name`, `attendance_date`, `employee`, `employee_name`, `check_in`, `check_out`
        FROM `tabAttendance`
        WHERE `employee` = %s
        AND `attendance_date` BETWEEN %s AND %s
    """
    params = [employee, from_date, to_date]

    if department:
        query += " AND `department` = %s"
        params.append(department)

    # Execute the query and retrieve the results
    results = frappe.db.sql(query, tuple(params), as_dict=True)

    # Process the results and build the report data
    for result in results:
        attendance_form_url = 'http://0.0.0.0:8000/app/attendance/{0}'.format(result.name)
        working_hours = calculate_working_hours(result.check_in, result.check_out)
        data.append([
            result.attendance_date,
            result.employee,
            result.employee_name,
            result.check_in,
            result.check_out,
            working_hours,
            '<a href="#" target="_blank" onclick="window.open(\'{0}\')">View Attendance</a>'.format(attendance_form_url)
        ])

    return columns, data
