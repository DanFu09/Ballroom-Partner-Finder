define([
    'jquery',
    'underscore',
    'backbone',

    'collections/Users',

    'text!templates/main.ejs'
], function($, _, Backbone,
        UsersCollection,
        mainTemplate
) {
    var mainView = Backbone.View.extend({
        template: _.template(mainTemplate),

        initialize: function(options) {
            this.collection = options.collection;
        },

        render: function() {
            var self = this;

            self.$el = self.template(self.collection.toJSON());
        }
    });

    return mainView;
});