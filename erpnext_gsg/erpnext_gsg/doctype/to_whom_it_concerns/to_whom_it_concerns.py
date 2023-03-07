# # Copyright (c) 2023, mohammed-mortaja and contributors
# # For license information, please see license.txt
#
# import frappe
# from frappe.model.document import Document
#
# class ToWhomItConcerns(Document):
# 	@frappe.whitelist()
# 	def get_salary_amount(employee):
# 		salary_slip = frappe.get_doc("Salary Slip", {"employee": employee})
# 		salary_amount = 0
# 		for earning in salary_slip.earnings:
# 			if earning.salary_component == "Basic":
# 				salary_amount = earning.amount
# 				break
# 		return salary_amount
#
