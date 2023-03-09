// Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Attendance Working Hours"] = {
	"filters": [
		{'fieldname': 'from_date', 'label': 'From Date', 'fieldtype': 'Date'},
		{'fieldname': 'to_date', 'label': 'To Date', 'fieldtype': 'Date'},
		{'fieldname': 'employee', 'label': 'Employee', 'fieldtype': 'Link', 'options': 'Employee'},
		{'fieldname': 'department', 'label': 'Department', 'fieldtype': 'Link', 'options': 'Department'},
	]
};
