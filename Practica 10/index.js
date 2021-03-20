var coordenadas = {
    lat: 0,
    lng: 0
};

var propiedades = {
    center: coordenadas,
    zoom: 2,
    mapId: 'c4cae189d2b34e37'
};

function iniciaMapa() {
    
    fetch('https://corona.lmao.ninja/v3/covid-19/countries')
    .then((res) => {
        res.json().then((data) => {
            console.log(data);
            const map = new google.maps.Map(document.getElementById('mapa'), propiedades);
            
            data.forEach(marcador => {
                if(marcador.country = marcador.country){
                    var infowindow = new google.maps.InfoWindow({
                        content: "Pais: " + marcador.country + ", Casos: " + marcador.cases
                    });
                    let marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(marcador.lat, marcador.long),
                        title: marcador.country
                    });
                    marker.addListener('click', function() {
                        infowindow.open(map,marker);
                    })
                }
            });
        });
    })
    .catch( (err) => {
        console.log(err);
    });
}