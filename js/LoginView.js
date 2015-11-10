var LoginView = function(service) {

    
    this.initialize = function() {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('click', '#login_btn', this.login);
        this.render();
    };
    
    this.render = function() {
        this.$el.html(this.template());
        return this;
    };
    
    this.login = function() {
        service.login($('.username').val(), $('.password').val()).done(function (user) {
            window.loggedUser = user;
            if (user != null) {
                //window.alert("Benvenuto, " + window.loggedUser);
                window.location.href = '#devices';
            }
        });
    };
    
    this.initialize();

}