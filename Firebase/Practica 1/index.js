var firebaseConfig = {
    apiKey: "AIzaSyDJBSSpn2GWF04CYK5aajEcPClwRuqxOi0",
    authDomain: "sis-geo.firebaseapp.com",
    projectId: "sis-geo",
    storageBucket: "sis-geo.appspot.com",
    messagingSenderId: "409501078421",
    appId: "1:409501078421:web:2fab08e4674b7c83f31c9c"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const prodLista = document.querySelector("#lista");

const formulario = document.querySelector('#forma');

function renderProductos(doc) {
    let li = document.createElement('li');
    let nombre = document.createElement('span');
    let codigo = document.createElement('span');
    let borrar = document.createElement('button');

    borrar.className = "btn btn-danger m-3";

    nombre.textContent = doc.data().nombre + ' ';
    codigo.textContent = doc.data().codigo + ' ';
    borrar.textContent = 'borrar ';

    li.setAttribute('id', doc.id);
    li.appendChild(borrar)
    li.appendChild(nombre);
    li.appendChild(codigo);

    prodLista.appendChild(li);

    borrar.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('id');
        db.collection('producto').doc(id).delete();
    })
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('producto').add({
        nombre: formulario.nombre.value,
        codigo: formulario.codigo.value
    });

    formulario.nombre.value = '';
    formulario.codigo.value = '';
});

db.collection('producto').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();

    changes.forEach(change => {
        if (change.type == 'added') {
            renderProductos(change.doc)
        } else if (change.type = 'removed') {
            let valorid = document.getElementById(change.doc.id);
            lista.removeChild(valorid);
        }
    })
});