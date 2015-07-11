define([
    'jquery',
    'underscore',
    'backbone',

    'text!templates/header.ejs'
], function($, _, Backbone,
        headerTemplate
) {
    var headerView = Backbone.View.extend({
        template: _.template(headerTemplate),

        render: function() {
            var self = this;

            this.$el.append(this.template());
        }
    });

    return headerView;
});