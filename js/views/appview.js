/**
 * Created by michael on 8/12/14.
 */
define(['./licenseview', '../models/licenses', './editview', 'jquery', 'underscore', 'backbone'], function(LicenseView, Licenses, EditView, $, _, Backbone) {
    var AppView = Backbone.View.extend({
        template: _.template($('#licenses-table-template').html()),
        dialog: _.template($('#licenses-dialog-template').html()),
        events: {
            "click #createBtn": "create"
        },
        initialize: function() {
            this.licensesModel = new Licenses();
            this.listenTo(this.licensesModel, 'add', this.addOne);
        },
        render: function() {
            // construct table
            this.$el.append(this.template);
            this.$el.append(this.dialog);

            this.editView = new EditView({el: '#myModal', collection: this.licensesModel});
            // load models
            this.licensesModel.fetch();
        },
        addOne: function(license) {
            var licenseView = new LicenseView({model: license, editView: this.editView});
            this.$("tbody").append(licenseView.render().el);
        },
        create: function() {
            this.editView.prepare({isCreate: true});
        }
    });
    return AppView;
});