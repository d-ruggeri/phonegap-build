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
        var $html = $(this.template(deviceList));
        var labelPotenzaIstantanea = $html.find('#potenzaIstantanea').get(0);
        labelPotenzaIstantanea.innerHTML = "Potenza istantanea: " + window.potenzaTotale + " W"
        this.$el.html($html);
        return this;
    };
    
    this.initialize();

}