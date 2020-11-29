let formularioUno = document.getElementById('formulario1');
let formularioDos = document.getElementById('formulario2');

formularioUno.addEventListener('submit', validarDatosBase);
formularioDos.addEventListener('submit', validarDatosTarjeta);

function validarDatosBase(e) {
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let minutos = document.getElementById('minutos').value;

    console.log(nombre, minutos);
}

function validarDatosTarjeta(e) {
    e.preventDefault();

    let base = document.getElementById('baseinicio').value;
    let horaInicio = document.getElementById('horainicio').value;
    let horafinal = document.getElementById('horafin').value;

    console.log(base, horaInicio, horafinal);
}