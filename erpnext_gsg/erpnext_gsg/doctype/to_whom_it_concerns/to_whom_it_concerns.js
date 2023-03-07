//// Copyright (c) 2023, mohammed-mortaja and contributors
//// For license information, please see license.txt
//
//frappe.ui.form.on("To Whom It Concerns", {
//    employee: function(frm) {
//        frappe.call({
//            method: "erpnext_gsg.erpnext_gsg.doctype.to_whom_it_concerns.to_whom_it_concerns.get_salary_amount",
//            args: {
//                employee: frm.doc.employee
//            },
//            callback: function(r) {
//                if (r.message) {
//                    frm.set_value("salary", r.message);
//                }
//            }
//        });
//    }
//});
