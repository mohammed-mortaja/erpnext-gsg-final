// The first way to solve
frappe.ui.form.on("Journal Entry", "refresh", function(frm) {
    frm.set_df_property("voucher_type", "options", [
        "Journal Entry", "Inter Company Journal Entry", "Bank Entry", "Cash Entry",
        "Credit Card Entry", "Debit Note", "Credit Note", "Contra Entry",
        "Opening Entry", "Depreciation Entry", "Exchange Rate Revaluation",
        "Deferred Revenue", "Deferred Expense"
    ].filter(function(option) {
        return option !== "Deferred Expense"&& option !== "Bank Entry"&& option !== "Excise Entry" && option !== "Write Off Entry";
    }));
});

//The two way to solve
//frappe.ui.form.on("Journal Entry", "refresh", function(frm) {
//    frappe.get_meta("Journal Entry", function(meta) {
//        var voucher_type_options = meta.fields.find(field => field.fieldname === "voucher_type").options;
//        var filtered_options = voucher_type_options.filter(function(option) {
//            return  option !== "Excise Entry" && option !== "Write Off Entry";
//        });
//        frm.set_df_property("voucher_type", "options", filtered_options);
//    });
//});
