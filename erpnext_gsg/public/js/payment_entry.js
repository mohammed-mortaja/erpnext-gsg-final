frappe.ui.form.on('Payment Entry', {
    onload: function(frm) {
        var naming_series = frm.fields_dict.naming_series;
        var options = naming_series.df.options;

        if (!options.includes('GSG-JV-.YYYY.-')) {
            options = 'GSG-JV-.YYYY.-\n' + options;
            naming_series.df.options = options;
            naming_series.refresh();
        }
    }
});
