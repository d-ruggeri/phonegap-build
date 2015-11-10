var DeviceView = function(device) {
    
    this.initialize = function() {
        this.$el = $('<div/>');
    };
    
    this.render = function() {
        this.$el.html(this.template(device));
        return this;
    };
    
    this.initialize();

}