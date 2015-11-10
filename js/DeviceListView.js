var DeviceListView = function (service, user) {

    var deviceList;
    
    this.initialize = function () {
        this.$el = $('<div/>');
        service.findByUserId(user.id).done(function (devices) {
            deviceList = devices;
        });
    };
    
    this.findByUserId = function(userId) {
        service.findByUserId(parseInt(userId)).done(function (devices) {
            deviceList = devices;
        });            
    };
    
    this.render = function() {
        this.$el.html(this.template(deviceList));
        return this;
    };
    
    this.initialize();

}