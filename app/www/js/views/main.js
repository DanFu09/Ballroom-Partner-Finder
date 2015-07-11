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

            var usersWithSearching = self.collection.map(function(user) {
                var searchingStyles = 
                _.pluck(
                _.sortBy(
                _.filter(user.get('styles'), function(style) {
                    return style.searching === 1;
                }), function(style) {
                    return style.name
                }), 'name');

                json = user.toJSON();
                
                json.searchingMessage = searchingStyles.length > 0 ?
                    'Looking for partners for ' + searchingStyles.join(', ') :
                    'Not looking for partners';

                return json;
            });

            console.log(usersWithSearching);
            self.$el.append(self.template({
                users: usersWithSearching
            }));
        }
    });

    return mainView;
});