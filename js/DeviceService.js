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
        var l = devices.length;
        for (var i=0; i < l; i++) {
            if (devices[i].userId === userId) {
                deviceList.push(devices[i]);
            }
        }
        deferred.resolve(deviceList);
        return deferred.promise();
    }

    var users = [
        {"id": 1, "firstName": "Diego", "lastName": "Ruggeri", "userName": "a138571", "password": "test"},
        {"id": 2, "firstName": "Stefano", "lastName": "Calandri", "userName": "a529317", "password": "test"},
        {"id": 3, "firstName": "Vincenzo", "lastName": "Cioffi", "userName": "a436658", "password": "test"}
    ];
    
    var devices = [
        {"id": 1, "userId": 1, "nome": "Lavatrice", "tipo": "lavatrice", "posizione": "Stanza da bagno", "stato": "on", "potenzaIstantanea": 300},
        {"id": 2, "userId": 1, "nome": "Scaldabagno", "tipo": "lavatrice", "posizione": "Stanza da bagno", "stato": "on", "potenzaIstantanea": 300},
        {"id": 3, "userId": 1, "nome": "TV", "tipo": "tv", "posizione": "Soggiorno", "stato": "off", "potenzaIstantanea": 300},
        {"id": 4, "userId": 1, "nome": "Impianto fotovoltaico", "tipo": "pannellofotov", "posizione": "Tetto", "stato": "on", "potenzaIstantanea": 1000},
        {"id": 5, "userId": 1, "nome": "Fornitura elettrica", "tipo": "rete", "posizione": "Casa", "stato": "off", "potenzaIstantanea": 0},
        {"id": 6, "userId": 1, "nome": "Forno", "tipo": "forno", "posizione": "Casa", "stato": "off", "potenzaIstantanea": 0},
        {"id": 7, "userId": 1, "nome": "Frigorifero", "tipo": "frigo", "posizione": "Casa", "stato": "off", "potenzaIstantanea": 0},
        {"id": 8, "userId": 1, "nome": "Stereo", "tipo": "stereo", "posizione": "Casa", "stato": "off", "potenzaIstantanea": 0},
        {"id": 9, "userId": 1, "nome": "Lavastoviglie", "tipo": "lavastov", "posizione": "Casa", "stato": "off", "potenzaIstantanea": 0}
    ];

}