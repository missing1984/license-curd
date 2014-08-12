/**
 * Created by michael on 8/12/14.
 */

define([ 'jquery', 'underscore', 'backbone', './editview'], function($, _, Backbone, EditView) {
    var LicenseView = Backbone.View.extend({
        tagName: "tr",
        template: _.template($('#license-template').html()),
        // The DOM events specific to an item.
        events: {
            "click #deleteBtn": "del",
            "click #editBtn": "edit"
        },
        initialize: function(attributes) {
            this.editView = attributes.editView;
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function() {
            var json_model = this.model.toJSON();
            json_model["clazz"] = json_model["class"];
            this.$el.html(this.template(_.omit(json_model, "class")));
            return this;
        },
        del: function(e) {
            this.model.destroy();
        },
        edit: function(e) {
            this.editView.prepare({isCreate: false, model: this.model});
        }
    })
    return LicenseView;
});