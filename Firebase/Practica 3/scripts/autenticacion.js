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
            mensaje = 'Ocurrio un error';
    }

    return mensaje;
}

const salir = document.getElementById('salir');

salir.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut().then(() => {
        console.log('signOut');
    });
})