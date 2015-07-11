define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',

    'text!templates/profile.ejs'
], function($, _, Backbone, bootstrap,
        profileTemplate
) {
    var profileView = Backbone.View.extend({
        template: _.template(profileTemplate),

        initialize: function(options) {
            this.user = options.user;
        },

        events: {
            'click .shower': 'toggleDetails'
        },

        toggleDetails: function(e) {
            var rows = $("."+e.target.attributes[1].value).each(function(){
                console.log($(this));
                if ($(this).css('display') == 'none'){
                    $(this).show();
                }
                else{
                    $(this).hide();
                }
            })
            console.log(e.target.attributes[1].value);
        },

        render: function() {
            var self = this;

            this.$el.append(this.template(self.user.toJSON()));
        }
    });

    return profileView;
});