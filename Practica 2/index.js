
var lstdatos = document.getElementById("lstdatos");

var datos = lstdatos.getElementsByTagName("li");

function obtenerDatos() {
    datos[0].innerHTML = "Nombre del navegador: " + navigator.appCodeName;
    datos[1].innerHTML = "Version del navegador: " + navigator.appVersion;
    datos[2].innerHTML = "Status del navegador: " + navigator.onLine;
    datos[3].innerHTML = "Plataforma: " + navigator.platform;
}
