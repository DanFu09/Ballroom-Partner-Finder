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

        initialize: function(options) {
            this.user = options.user;
        },

        render: function() {
            var self = this;

            this.$el = this.template(self.user.toJSON());
        }
    });

    return profileView;
});