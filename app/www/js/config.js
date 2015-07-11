'use strict';

require.config({
    baseUrl: "js",
    paths: {
        jquery: 'libs/jquery-2.1.4.min',
        backbone: 'libs/backbone-min',
        underscore: 'libs/underscore-min',
        text: 'libs/require/text'
    },
    shim: {
        'libs/backbone.marionette.min': { exports: 'Marionette' }
    },
    text: {
        useXhr: function (url, protocol, hostname, port) {
            // allow cross-domain requests
            // remote server allows CORS
            return true;
        }
    }
});
require(['app'], function (app) {
    app.initialize();
});
