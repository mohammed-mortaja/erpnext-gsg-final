// Copyright (c) 2023, mohammed-mortaja and contributors
// For license information, please see license.txt


frappe.ui.form.on('To Whom It Concerns', {
    employee: function(frm) {
        if (frm.doc.employee){
            frappe.call({
                method: "erpnext_gsg.erpnext_gsg.doctype.to_whom_it_concerns.to_whom_it_concerns.get_salary_slip",
                args: { employee: frm.doc.employee },
                callback: function(r){
                    console.log(r.message);
                    frm.set_value('salary', r.message);
                    refresh_field('salary');
                }
            });
        }
    }
});

