document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    navigator.geolocation.getCurrentPosition(onSuccess,onError);
}


// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates

function onSuccess(position) {
    //On log toutes les informations
    console.log('Latitude: '          + position.coords.latitude          + '\n' +
                  'Longitude: '         + position.coords.longitude         + '\n' +
                  'Altitude: '          + position.coords.altitude          + '\n' +
                  'Accuracy: '          + position.coords.accuracy          + '\n' +
                  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                  'Heading: '           + position.coords.heading           + '\n' +
                  'Speed: '             + position.coords.speed             + '\n' +
                  'Timestamp: '         + position.timestamp                + '\n');
    //On affiche sur lla page d'accueil toutes les 30sec la latitude et la longitude
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                        'Longitude: ' + position.coords.longitude     + '<br />' +
                        '<hr />'      + element.innerHTML;
}

// onError Callback receives a PositionError object

function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

// Si la localisation mets plus de 30sec on affiche un message d'erreur

var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });