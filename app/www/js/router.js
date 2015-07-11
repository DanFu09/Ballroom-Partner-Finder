define([
    'jquery',
    'underscore',
    'backbone',
    'views/main',
    'views/profile',
    'views/settings',
    'collections/Users'
], function($, _, Backbone,
    MainView,
    ProfileView,
    SettingsView,
    UsersCollection
) {
    'use strict';

    var Router = Backbone.Router.extend({
        initialize: function(options) {
            this.contentContainer = options.contentContainer;
            this.usersCollection = new UsersCollection();
        },

        routes: {
            '': 'main',
            'profile': 'profile',
            'settings': 'settings'
        },

        setView: function(view) {
            view.render();
            this.contentContainer.empty();
            this.contentContainer.append(view.$el);
        },

        main: function() {
            var self = this;

            var mainView = new MainView({
                collection: self.usersCollection
            });

            $.when(self.usersCollection.fetch()).then(function() {
                self.setView(mainView);
            });
        },

        profile: function() {
            var profileView = new ProfileView();

            this.setView(profileView);
        },

        settings: function() {
            var settingsView = new SettingsView();

            this.setView(settingsView);
        }
    });

    return Router;
});