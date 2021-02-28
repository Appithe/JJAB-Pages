AOS.init();

        function iniciaMapa() {
            var coordenadas = {
                lat: 20.95185919,
                lng: -101.285888
            }

            var map = new google.maps.Map(document.getElementById('mapa'), {
                center: coordenadas,
                zoom: 15
            });
        }