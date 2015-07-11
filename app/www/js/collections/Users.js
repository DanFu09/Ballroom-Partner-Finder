define([
    'jquery',
    'underscore',
    'backbone',

    'models/User'
], function($, _, Backbone,
	UserModel
) {
    'use strict';

    var Users = Backbone.Collection.extend({
    	url: 'static/users.json',
    	model: UserModel
    });

    return Users;
});