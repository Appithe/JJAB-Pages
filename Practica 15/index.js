var coordenadas = {
    lat: 0, lng: 0
}

function iniciaMapa() {
    var map = new google.maps.Map(
        document.getElementById('mapa'),
            {
                center: coordenadas,
                zoom: 20,
            }
        );

    var icono = {
        url: "https://media.giphy.com/media/1ZweHMlSaxcc32mSSu/giphy.gif", 
        scaledSize: new google.maps.Size(25,25),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,0)
    }

    var watchId = null;

    const btnWatch = document.getElementById('btnWatch');
    const btnStop = document.getElementById('btnStop');

    var positionOptions = {
        enableHighAccuracy: true,
        timeout: 10 * 1000, //10 segundos
        maximumAge: 30 * 1000, //30 segundos
    };

    if(navigator.geolocation) {
        btnWatch.addEventListener('click', () => {
            watchId = navigator.geolocation.watchPosition(success, error, positionOptions);
        });

        btnStop.addEventListener('click', () => {
            if(watchId !== null) {
                navigator.geolocation.clearWatch(watchId);

                const html = 'ubicacion detenida';
                datos.innerHTML = html;
            }
        })
    }

    var success = (position) => {
        var marker = new google.maps.Marker({
            position: coordenadas,
            icon: icono,
            map: map
        });

        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        console.log(position);

        var coordenadas = lat + ', ' + lng;

        var exactitud = position.coords.accuracy ? position.coords.accuracy : 'no disponible';
        var altitud = position.coords.altitude ? position.coords.altitude : 'no disponible';
        var velocidad = position.coords.speed ? position.coords.speed : 'no disponible';
        var fechayhora = (new Date(position.timestamp)).toString();

        const html = `
            <p>Coordenadas: ${coordenadas}</p>
            <p>Exactitud: ${exactitud}</p>
            <p>Altitud: ${altitud}</p>
            <p>Velocidad: ${velocidad}</p>
            <p>Fecha y Hora: ${fechayhora}</p>
        `;

        const datos = document.getElementById('datos');
        datos.innerHTML = html;

        marker.setPosition(new google.maps.LatLng(lat, lng));
        map.panTo(new google.maps.LatLng(lat,lng));

    }

    var error = (positionError) => {
        console.log(positionError.message);
    }

}