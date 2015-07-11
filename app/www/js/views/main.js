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

            console.log(self.collection.toJSON());

            self.$el.append(self.template({
                users: self.collection.toJSON()
            }));
        }
    });

    return mainView;
});