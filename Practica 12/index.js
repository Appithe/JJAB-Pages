var coordenadas = {
    lat: 19.4978, lng: -99.1269
}

const queryString = window.location.search;

const ulrParams = new URLSearchParams(queryString);
const idioma = ulrParams.get("idioma");

document.getElementById("idioma").value = idioma;

var urlApi = document.createElement("script");
urlApi.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAZKDApuGtUvBAGTzfy_tGN4Bnc1xavnGw&map_ids=c4cae189d2b34e37&callback=iniciaMapa&language=" + idioma;
document.head.appendChild(urlApi)

function iniciaMapa() {
    var map = new google.maps.Map(
    document.getElementById('mapa'),
        {
            center: coordenadas,
            zoom: 3,
            mapId: 'c4cae189d2b34e37'
        }
    );
}