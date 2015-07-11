define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',

    'text!templates/profile.ejs'
], function($, _, Backbone, bootstrap,
        profileTemplate
) {
    var profileView = Backbone.View.extend({
        template: _.template(profileTemplate),

        initialize: function(options) {
            this.user = options.user;
        },

        events: {
            'click button': 'toggleDetails'
        },

        toggleDetails: function(e) {
            console.log("is this working");
        },

        render: function() {
            var self = this;

            this.$el.append(this.template(self.user.toJSON()));
        }
    });

    return profileView;
});