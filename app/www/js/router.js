define([
    'jquery',
    'underscore',
    'backbone',
    'views/main',
    'views/profile',
    'views/settings'
], function($, _, Backbone,
    MainView,
    ProfileView,
    SettingsView
) {
    'use strict';

    var Router = Backbone.Router.extend({
        initialize: function(options) {
            this.contentContainer = options.contentContainer;
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
            var mainView = new MainView();

            this.setView(mainView);
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