//frappe.ui.form.on('Material Request', {
//    validate: function(frm) {
//        if (frm.doc.purpose === "Material Issue") {
//            var se = frappe.model.get_new_doc("Stock Entry");
//            se.stock_entry_type = "Material Issue";
//            se.to_warehouse = frm.doc.warehouse;
//            se.material_request = frm.doc.name;
//            $.each(frm.doc.items, function(i, item) {
//                var se_item = frappe.model.add_child(se, "items");
//                se_item.item_code = item.item_code;
//                se_item.qty = item.qty;
//                se_item.uom = item.uom;
//                se_item.stock_uom = item.stock_uom;
//                se_item.conversion_factor = item.conversion_factor;
//                se_item.transfer_qty = item.qty;
//                se_item.material_request = frm.doc.name;
//            });
//            frappe.set_route("Form", se.doctype, se.name);
//            return false;
//        }
//    }
//});
