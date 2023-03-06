
frappe.ui.form.on("Journal Entry", "refresh", function(frm) {
    if (frm.doc.__islocal) {
        // if the Journal Entry is new, show all Journal Entry options
        frm.set_df_property("voucher_type", "options", [
            "Journal Entry","Inter Company Journal Entry","Bank Entry","Cash Entry",
            "Credit Card Entry", "Debit Note", "Credit Note",  "Contra Entry",  "Contra Entry",
            "Opening Entry", "Depreciation Entry",  "Exchange Rate Revaluation",  "Deferred Revenue",

        ]);
    } else {
        // if the Journal Entry is not new, hide "Excise Entry" and "Write Off Entry"
        var voucher_type_options = [
            "Journal Entry","Inter Company Journal Entry","Bank Entry",
            "Cash Entry",  "Credit Card Entry", "Debit Note","Credit Note","Deferred Revenue",
            "Contra Entry", "Opening Entry", "Depreciation Entry","Exchange Rate Revaluation","Deferred Expense"
        ];
        frm.doc.__onload.voucher_type_options.forEach(function(option) {
            if (option.value != "Excise Entry" && option.value != "Write Off Entry") {
                voucher_type_options.push(option.value);
            }
        });
        frm.set_df_property("voucher_type", "options", voucher_type_options);
    }
});
