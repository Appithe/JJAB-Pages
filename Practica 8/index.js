var paises = document.getElementById("paises");

        fetch('https://corona.lmao.ninja/v3/covid-19/countries')
        .then( function(response) {
            response.json().then( function(datos) {
                datos.forEach(dato => {

                    console.log(dato);

                    let region = document.createElement("div");
                    region.className = "row border bg-Light";
                    paises.appendChild(region);

                    let flag = document.createElement("img");
                    flag.style = "width: 100px; height: 50px;";
                    flag.src = dato.countryInfo.flag;
                    region.appendChild(flag);

                    let columna = document.createElement("div");
                    columna.className = "col-6";
                    region.appendChild(columna);

                    let nombre = document.createElement("p");
                    nombre.textContent =" Pais: " + dato.country + ", casos: " + dato.cases + ", muertos: " + dato.deaths;
                    columna.appendChild(nombre);

                });
            });
        });