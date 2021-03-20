function getUbication() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        coords.innerHTML = "Activa las funciones de geolocalizacion"
    }
}

function showPosition(position) {
    var coords = position.coords.latitude + "," + position.coords.longitude;
    console.log(coords);

    var url = "https://maps.googleapis.com/maps/api/staticmap?center=" + coords + "&zoom=18&size=800x800&key=AIzaSyAZKDApuGtUvBAGTzfy_tGN4Bnc1xavnGw";

    var mapa = document.getElementById("mapa");
    mapa.innerHTML = "<img src=" + url + ">";
}

