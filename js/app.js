// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    LoginView.prototype.template = Handlebars.compile($("#login-tpl").html());
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
    EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());
    
    var service = new EmployeeService();
    service.initialize().done(function () {
        router.addRoute('', function() {
            $('body').html(new LoginView(service).render().$el);
        });
        
        router.addRoute('home', function() {
            //if (!checkLogin()) return;
            $('body').html(new HomeView(service).render().$el);
        });
        
        router.addRoute('employees/:id', function(id) {
            //if (!checkLogin()) return;
            service.findById(parseInt(id)).done(function(employee) {
                $('body').html(new EmployeeView(employee).render().$el);
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