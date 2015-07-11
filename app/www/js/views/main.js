define([
    'jquery',
    'underscore',
    'backbone',

    'text!templates/main.ejs'
], function($, _, Backbone,
        mainTemplate
) {
    var mainView = Backbone.View.extend({
        template: _.template(mainTemplate),

        render: function() {
            this.$el = this.template;
        }
    });

    return mainView;
});