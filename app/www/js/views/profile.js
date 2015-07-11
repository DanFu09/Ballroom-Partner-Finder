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
            this.mainUser = options.mainUser;
        },

        events: {
            'click .shower': 'toggleDetails'
        },

        toggleDetails: function(e) {
            var rows = $("."+e.target.attributes[0].value).each(function(){
                if ($(this).css('display') == 'none'){
                    $(this).show();
                }
                else{
                    $(this).hide();
                }
            })
        },

        render: function() {
            var self = this;
            this.$el.append(this.template(self.user.toJSON()));
        }
    });

    return profileView;
});