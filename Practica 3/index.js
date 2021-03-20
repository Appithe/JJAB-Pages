var coords = document.getElementById("demo");

function getLoaction() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        coords.innerHTML = "Activa las funciones de geolocalizacion"
    }
}

function showPosition(position) {
    coords.innerHTML = "Latitude: " + position.coords.latitude + "<br> Longitude: " + position.coords.longitude;
}