define([
    'jquery',
    'underscore',
    'backbone',

    'text!templates/profile.ejs'
], function($, _, Backbone,
        profileTemplate
) {
    var profileView = Backbone.View.extend({
        template: _.template(profileTemplate),

        render: function() {
            this.$el = this.template;
        }
    });

    return profileView;
});