define([
    'jquery',
    'underscore',
    'backbone',

    'text!templates/settings.ejs'
], function($, _, Backbone,
    settingsTemplate
) {
    var settingsView = Backbone.View.extend({
        template: _.template(settingsTemplate),

        getdata: function() {
            var formData = $("form.newstyle").serializeObject();
            console.log(formData);
        },

        render: function() {
            this.$el.append(this.template());
        }
    });

    return settingsView;
});