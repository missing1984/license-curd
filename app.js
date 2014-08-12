require.config({
    paths: {
        jquery: 'bower_components/jquery/dist/jquery.min',
        underscore: 'bower_components/underscore/underscore',
        backbone: 'bower_components/backbone/backbone',
        bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    }
});


require(['backbone'], function(Backbone) {
    var proxiedSync = Backbone.sync;
    Backbone.sync = function(method, model, options) {
        options || (options = {});

        if (!options.crossDomain) {
            options.crossDomain = true;
        }

        if (!options.xhrFields) {
            options.xhrFields = {withCredentials: true};
        }
        return proxiedSync(method, model, options);
    };

    Backbone.View.prototype.close = function(){
        this.remove();
        this.unbind();
    }

    require(['./js/views/appview', 'bootstrap'], function(AppView) {
        var appView = new AppView({el: '#content'});
        appView.render();
    });
});


