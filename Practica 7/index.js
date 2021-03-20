var paises = document.getElementById("paises");

// fetch('./datos.json')
fetch('https://corona.lmao.ninja/v3/covid-19/countries')
.then( function(response) {
    response.json().then( function(datos) {
        datos.forEach(dato => {
            console.log(dato);

            let nombre = document.createElement("ul");
            nombre.className = "list-group"
            nombre.innerHTML = '<li class="list-group-item">Pais: ' + dato.country + ', Casos: ' +  + dato.cases + '</li>'
            paises.appendChild(nombre)
        });
    })
    .catch((err) => {
        console.log(err);
    })
});