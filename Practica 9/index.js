var coordenadas = {
    lat: 0,
    lng: 0
};

var propiedades = {
    center: coordenadas,
    zoom: 2,
    mapId: 'c4cae189d2b34e37'
};

function obtenerMarcadores() {
    const markers = [
        {
            name: "Mexico",
            latitude: "23.634501",
            longitude: "-102.552784"
        }, {
            name: "Brasil",
            latitude: "-14.235004",
            longitude: "-51.92528"
        }, {
            name: "Argentina",
            latitude: "-38.416097",
            longitude: "-63.616672"
        }
    ];
    return markers;
}

function iniciaMapa() {
    const map = new google.maps.Map(document.getElementById('mapa'), propiedades);
    const marcadores = obtenerMarcadores();

    console.log(marcadores);

    try {
        for(marcador in marcadores) {
            let marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(marcador.latitude, marcador.longitude),
                title: marcador.name
            });
        }
    } catch (e) {
        console.log(e);
    }
}