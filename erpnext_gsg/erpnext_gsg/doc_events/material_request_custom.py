
import frappe

def create_stock_entry(doc, method):
    if doc.material_request_type == "Material Issue":
        new_stock_entry = frappe.new_doc("Stock Entry")
        new_stock_entry.stock_entry_type = doc.material_request_type
        new_stock_entry.from_warehouse = doc.set_warehouse
        new_stock_entry.to_warehouse = doc.set_from_warehouse

        for item in doc.items:
            new_stock_entry.append("items", {"item_code": item.item_code,
                                             "qty": item.qty,
                                             })

        new_stock_entry.insert()
        new_stock_entry.submit()