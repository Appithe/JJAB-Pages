auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('platillos').onSnapshot(snapshot => {
            cargarPlatillos(snapshot.docs);
        });
        configurarMenu(user);
    } else {
        cargarPlatillos([]);
        configurarMenu();
    }
});

const formaIngresar = document.getElementById('formaIngresar');

formaIngresar.addEventListener('submit', (e) => {
    e.preventDefault();

    let correo = formaIngresar['correo'].value;
    let password = formaIngresar['pass'].value;

    auth.signInWithEmailAndPassword(correo, password).then(cred => {
        console.log(cred);

        $('#IngresarModal').modal('hide');
        formaIngresar.reset();
        formaIngresar.querySelector('.error').innerHTML = '';
    }).catch(err => {
        formaIngresar.querySelector('.error').innerHTML = mensajeError(err.code);
        console.log(err);
    });
});

function mensajeError(code) {
    let mensaje = '';

    switch (code) {
        case 'auth/wrong-password':
            mensaje = 'Su contraseña no es correcta';
            break;

        case 'auth/user-not-found':
            mensaje = 'Usuario no encontrado';
            break;

        case 'auth/weak-password':
            mensaje = 'Contraseña debil';
            break;
        default:
            mensaje = code;
    }

    return mensaje;
}

const salir = document.getElementById('salir');

salir.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut().then(() => {
        console.log('signOut');
    });
});

const formaRegistro = document.getElementById('formaRegistro');

formaRegistro.addEventListener('submit', (e) => {
    e.preventDefault;

    const correo = formaRegistro['rcorreo'].value;
    const pass = formaRegistro['rpass'].value;

    auth.signInWithEmailAndPassword(correo, pass).then(cred => {
        return db.collection('usuarios').doc(cred.user.uid).set({
            nombre: formaRegistro['rnombre'].value,
            telefono: formaRegistro['rtelefono'].value,
            direccion: formaRegistro['rdireccion'].value
        });
    }).then(() => {
        $('#RegistroModal').modal('hide');
        formaRegistro.reset();
        formaRegistro.querySelector('.error').innerHTML = '';
    }).catch(err => {
        formaRegistro.querySelector('.error').innerHTML = mensajeError(err.code);
        console.log(err.code);
    });
});

ingresarConGoogle = () => {
    var provider = new firebase.aut.GoogleAuthProvider();

    firebase.auth().signWithPopup(provider).then(result => {
        var token = result.credential.accessToken;
        console.log(token);

        var user = result.user;

        let html = `
            <p>Nombre: ${user.displayName}</p>
            <p>Correo: ${user.email}</p>
            <img src="${user.photoURL}" width="50px">
        `;

        infoCuenta.innerHTML = html;
        $('#IngresarModal').modal('hide');
        formaIngresar.reset();
        formaIngresar.querySelector('.error') = '';
    }).catch(error => {
        console.log(error);
    });
}