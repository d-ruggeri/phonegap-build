var TechMapView = function(device) {
    
    var dev;
    
    this.initialize = function() {
        this.$el = $('<div/>');
        dev = device;
    };
    
    this.render = function() {
        var $html = $(this.template(dev));
        this.$el.html($html);
        return this;
    };
    
    this.initialize();

}