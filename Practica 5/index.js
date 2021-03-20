var informacion = "<h1>Universidad DeLaSalle Bajío AC.</h1>"
informacion +=
    "<p><strong>Dirección: </strong> Avenida Universidad 602, Lomas del Campestre, 37150 León, Gto, México.</p>"
informacion += "<p><strong>Teléfono: </strong>477 710 8500.</p>"

function iniciaMapa() {

    var propiedades = {
        center: {
            lat: 21.152639,
            lng: -101.711598
        },
        zoom: 14,
        mapId: 'c4cae189d2b34e37'
    };
    const mapa = document.getElementById("map")
    const map = new google.maps.Map(mapa, propiedades)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let posicion = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            let propiedadesMarcador = {
                position: posicion,
                map,
                title: "Marcardor"
            }
            const marcador = new google.maps.Marker(propiedadesMarcador);
            map.setCenter(posicion)
            const infowindow = new google.maps.InfoWindow({
                content: informacion
            })
            marcador.addListener("click", () => {
                infowindow.open(map, marcador);
            })
        })
    }
}