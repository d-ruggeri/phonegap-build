var TechMapView = function(device) {
    
    var dev;
    
    this.initialize = function() {
        this.$el = $('<div/>');
        dev = device;
    };
    
    this.render = function() {
        var $html = $(this.template(dev));
        this.$el.html($html);
        setTimeout(this.createMap, 1000);
        return this;
    };
    
    this.createMap = function () {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 45.484147, lng: 9.244839},
            zoom: 16
        });

        var latlng = new google.maps.LatLng(45.484941, 9.242621 );
        var latlng1 = new google.maps.LatLng(45.483035, 9.243809 );
        var latlng2 = new google.maps.LatLng(45.484946, 9.247114 );

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Riparo 100% Srl</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Riparo 100% Srl</b> è un azienda che sorge nel 1999 e si occupa della riparazione di caldaie, clima ed elettrodomestici.</p>'+
            '<p></p>'+
            '<p></p>'+
            '<p></p>'+
            '<p></p>'+
            '<p><b>Richiedi assistenza: <a href="tel:+393206853228">320 6853228</a></b></p>'+
            '</div>'+
            '</div>';

        var contentString1 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Caldaie e Clima Srl</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Caldaie e Clima Srl</b> è un azienda che sorge nel 2001 e si occupa della riparazione di caldaie, clima ed elettrodomestici.</p>'+
            '<p></p>'+
            '<p></p>'+
            '<p></p>'+
            '<p></p>'+
            '<p><b>Richiedi assistenza: <a href="tel:+393206853228">320 6853228</a></b></p>'+
            '</div>'+
            '</div>';

        var contentString2 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Impianti e Caldaie Srl</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Impianti e Caldaie Srl</b> è un azienda che sorge nel 1985 e si occupa della relaizzazione di impianti e riparazione di caldaie, clima ed elettrodomestici.</p>'+
            '<p></p>'+
            '<p></p>'+
            '<p></p>'+
            '<p></p>'+
            '<p><b>Richiedi assistenza: <a href="tel:+393206853228">320 6853228</a></b></p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({content: contentString});
        var infowindow1 = new google.maps.InfoWindow({content: contentString1});
        var infowindow2 = new google.maps.InfoWindow({content: contentString2});
          
        var marker = new google.maps.Marker({position: latlng, map: map, title:' Riparo 100% Srl'});

        marker.addListener('click', function() {infowindow.open(map, marker);});

        var marker1 = new google.maps.Marker({
                        position: latlng1, 
                        map: map, 
                        title:' Caldaie e Clima Srl'
                    });
        marker1.addListener('click', function() {infowindow1.open(map, marker1);});

        var marker2 = new google.maps.Marker({
                            position: latlng2, 
                            map: map, 
                            title:'Impianti e Caldaie Srl'
                        });

        marker2.addListener('click', function() {infowindow2.open(map, marker2);});
    };
   
    
    this.initialize();

}