var DeviceView = function(device) {
    
    this.initialize = function() {
        this.$el = $('<div/>');
    };
    
    this.render = function() {
        var $html = $(this.template(device));
        this.$el.html($html);
        //setTimeout(this.createGraph(this.$el), 2000);
        return this;
    };
    
    this.createGraph = function(html) {
        var canv = html.find('#chart1mobile').get(0);
        console.log(canv);
        var ctx = canv.getContext("2d");
        var options = {
            scaleBeginAtZero : true,
            scaleShowGridLines : true,
            scaleGridLineColor : "rgba(0,0,0,.05)",
            scaleGridLineWidth : 1,
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: true,
            barShowStroke : true,
            barStrokeWidth : 2,
            barValueSpacing : 5,
            barDatasetSpacing : 1,
            legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        };           
        var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,0.8)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };
        var myNewChart = new Chart(ctx).Bar(data, options);
    }
    
    this.initialize();

}