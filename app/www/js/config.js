require.config({
	baseUrl: "js",
	paths: {
		jquery: 'lib/jquery-2.1.4.min.js'
	},
	shim: {
		'libs/underscore_min': { exports: '_' },
		'libs/backbone-min': { exports: 'Backbone' }
	}
});
require(['app'], function (app) {
    app.initialize();
});