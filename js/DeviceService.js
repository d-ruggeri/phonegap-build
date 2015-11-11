var DeviceService = function() {

    this.initialize = function() {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.login = function(username, password) {
        var deferred = $.Deferred();
        var user = null;
        var l = users.length;
        for (var i=0; i < l; i++) {
            if (users[i].userName == username && users[i].password == password) {
                user = users[i];
                break;
            }
        }
        deferred.resolve(user);
        return deferred.promise();
    }
    
    this.findByUserId = function(userId) {
        var deferred = $.Deferred();
        var deviceList = [];
        var potenzaTot = 0;
        var l = devices.length;
        for (var i=0; i < l; i++) {
            if (devices[i].userId === userId) {
                devices[i].notRunning = (devices[i].potenzaIstantanea == 0);
                devices[i].warning = !devices[i].running && (devices[i].potenzaIstantanea > devices[i].potenzaClasse);
                potenzaTot += devices[i].potenzaIstantanea;
                deviceList.push(devices[i]);
            }
        }
        window.potenzaTotale = potenzaTot;
        deferred.resolve(deviceList);
        return deferred.promise();
    }
    
    this.findById = function(id) {
        var deferred = $.Deferred();
        var device = null;
        var l = devices.length;
        for (var i=0; i < l; i++) {
            if (devices[i].id === id) {
                devices[i].notRunning = (devices[i].potenzaIstantanea == 0);
                devices[i].warning = !devices[i].running && (devices[i].potenzaIstantanea > devices[i].potenzaClasse);
                device = devices[i];
                break;
            }
        }
        deferred.resolve(device);
        return deferred.promise();
    }    

    var users = [
        {"id": 1, "firstName": "Diego", "lastName": "Ruggeri", "userName": "a138571", "password": "test"},
        {"id": 2, "firstName": "Stefano", "lastName": "Calandri", "userName": "a529317", "password": "test"},
        {"id": 3, "firstName": "Vincenzo", "lastName": "Cioffi", "userName": "a436658", "password": "test"}
    ];
    
    var devices = [
        {"id": 1, "userId": 1, "nome": "Lavatrice", "tipo": "lavatrice", "posizione": "Bagno", "stato": "on", "potenzaIstantanea": 300, "potenzaClasse": 500},
        {"id": 2, "userId": 1, "nome": "Scaldabagno", "tipo": "boiler", "posizione": "Bagno", "stato": "on", "potenzaIstantanea": 200, "potenzaClasse": 1200},
        {"id": 3, "userId": 1, "nome": "TV", "tipo": "tv", "posizione": "Soggiorno", "stato": "off", "potenzaIstantanea": 0, "potenzaClasse": 200},
        {"id": 4, "userId": 1, "nome": "Forno", "tipo": "forno", "posizione": "Casa", "stato": "off", "potenzaIstantanea": 900, "potenzaClasse": 800},
        {"id": 5, "userId": 1, "nome": "Frigorifero", "tipo": "frigo", "posizione": "Casa", "stato": "off", "potenzaIstantanea": 200, "potenzaClasse": 500},
        {"id": 6, "userId": 1, "nome": "Stereo", "tipo": "stereo", "posizione": "Casa", "stato": "off", "potenzaIstantanea": 50, "potenzaClasse": 200},
        {"id": 7, "userId": 1, "nome": "Lavastoviglie", "tipo": "lavastov", "posizione": "Casa", "stato": "off", "potenzaIstantanea": 0, "potenzaClasse": 500}
    ];
    
    var techs = [
        {}
    ];

}