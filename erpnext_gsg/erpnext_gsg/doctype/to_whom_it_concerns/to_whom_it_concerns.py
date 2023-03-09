# Copyright (c) 2023, mohammed-mortaja and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class ToWhomItConcerns(Document):
    pass
@frappe.whitelist()
def get_salary_slip(employee):
    salary_slip = frappe.get_list('Salary Slip',
                                   filters={'employee': employee},
                                   fields=['net_pay'],
                                   order_by='creation desc',
                                   limit_page_length=1)
    if salary_slip:
        return salary_slip[0].get('net_pay')
    else:
        return 0

