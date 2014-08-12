/**
 * Created by michael on 8/12/14.
 */
define(['../models/license', 'jquery', 'underscore', 'backbone'], function(License, $, _, Backbone) {
    var EditView = Backbone.View.extend({
        events: {
            "click #saveBtn": "saveModel"
        },
        initialize: function() {
            this.email = this.$('#email');
            this.class = this.$('#class');
            this.user = this.$('#user');
            this.sn = this.$('#sn');
        },
        init: function() {
            if (this.isCreate) {
                this.email.val('');
                this.sn.val('');
                this.user.val('');
                this.class.val('');
            }
            else {
                this.email.val(this.model.get('email'));
                this.sn.val(this.model.get('sn'));
                this.user.val(this.model.get('user'));
                this.class.val(this.model.get('class'));
            }
        },
        saveModel: function() {
            var attributes = {'email': this.email.val(), 'sn': this.sn.val(), 'user': this.user.val(), 'class': this.class.val()};
            if (this.isCreate) {
                this.collection.create(attributes, {wait: true});
            }
            else {
                this.model.save(attributes);
            }
            this.$el.modal('hide');
        },
        prepare: function(options) {
            this.isCreate = options.isCreate;
            this.model = options.model;
            this.init();
        }
    });
    return EditView;
});
