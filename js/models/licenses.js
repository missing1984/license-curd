/**
 * Created by michael on 8/12/14.
 */
define(['jquery', 'underscore', 'backbone', './license'], function($, _, Backbone, License) {
    var Licenses = Backbone.Collection.extend({
        model: License,
        url: 'http://interview.dev.splunk.io/licenses'
    });
    return Licenses;
});