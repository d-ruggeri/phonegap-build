// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    LoginView.prototype.template = Handlebars.compile($("#login-tpl").html());
    DeviceListView.prototype.template = Handlebars.compile($("#device-list-tpl").html());
    DeviceView.prototype.template = Handlebars.compile($("#device-tpl").html());
    
    var service = new DeviceService();
    service.initialize().done(function () {
        router.addRoute('', function() {
            $('body').html(new LoginView(service).render().$el);
        });
        
        router.addRoute('devices', function() {
            //if (!checkLogin()) return;
            $('body').html(new DeviceListView(service, window.loggedUser).render().$el);
        });
        
        router.addRoute('device/:id', function(id) {
            //if (!checkLogin()) return;
            service.findById(parseInt(id)).done(function(device) {
                $('body').html(new DeviceView(device).render().$el);
            });
        });
        
        router.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */
	document.addEventListener('deviceready', function() {
		FastClick.attach(document.body);
	    if (navigator.notification) { // Override default HTML alert with native dialog
		    window.alert = function (message) {
			    navigator.notification.alert(message, null, "Workshop", 'OK');
			};
		}
	}, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
    function checkLogin() {
        if (window.loggedUser == null) {
            $('body').html(new LoginView(service).render().$el);
            return false;
        }
        return true;
    }
}());