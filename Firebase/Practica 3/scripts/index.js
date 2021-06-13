const loggedout = document.querySelectorAll('.logged-out');
const loggedin = document.querySelectorAll('.logged-in');
const infoCuenta = document.querySelector('.infoCuenta');

const configurarMenu = (user) => {
    if (user) {

        db.collection('usuarios').doc(user.uid).get().then(doc => {
            const html = `
                <p>Nombre: ${doc.data().nombre}</p>
                <p>Correo: ${doc.data().correo}</p>
                <p>Telefono: ${doc.data().telefono}</p>
                <p>Direccion: ${doc.data().direccion}</p>
            `;

            infoCuenta.innerHTML = html;
        });

        loggedin.forEach(item => item.style.display = 'block');
        loggedout.forEach(item => item.style.display = 'none');
    } else {
        loggedin.forEach(item => item.style.display = 'none');
        loggedout.forEach(item => item.style.display = 'block');
    }
};

const lstPlatillos = document.getElementById('lstPlatillos');

const cargarPlatillos = (data) => {
    if (data.legth) {

        let html = '';

        data.forEach(doc => {
            const platillo = doc.data();
            const columna = `
                <div class="col-4 col-md-4">
                    <img src="./imagenes/${platilo.imagen}" class="img-thumbnail" alt="${platillo.nombre}">
                    <p>${platillo.nombre}</p>
                    <p class="text-danger">$ ${platillo.precio}</p>
                    <a href="https://www.paypal.me/grupohernandezalba/${platillo.precio}" target="_blank">
                        <button class=""btn btn-primary">Pagar Ahora</button>
                    </a>
                </div>
            `;

            html += columna;
        });

        lstPlatillos.innerHTML = html;
    } else {
        lstPlatillos.innerHTML = "favor de ingresar";
    }
};