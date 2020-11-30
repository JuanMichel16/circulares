import Ruta from './ruta.js'
import Base from './base.js'

const btnAgregar = document.querySelector('#agregar')
const btnBuscar = document.querySelector('#buscar')
const btnEliminar = document.querySelector('#eliminar')
const btnInsertar = document.querySelector('#insertar')
const formularioDos = document.getElementById('formulario2');

formularioDos.addEventListener('submit', validarDatosTarjeta);

const ruta = new Ruta();

function validarDatosBase(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const minutos = document.getElementById('minutos').value;

    if(nombre === '' || minutos === '') {
        crearMensaje(1, "Todos los espacios deben estar llenos");
        return;
    } else {
        const nuevaBase = new Base(nombre, minutos);
        ruta.agregar(nuevaBase);

        console.log(ruta);
        return;
    }
}

function validarDatosTarjeta(e) {
    e.preventDefault();

    const base = document.getElementById('baseinicio').value;
    const horaInicio = document.getElementById('horainicio').value;
    const horaFinal = document.getElementById('horafin').value;

    if(base === '' || horaInicio === '' || horaFinal === '') {
        crearMensaje(2, "Todos los espacios deben estar llenos")
    } else {
        console.log(base, horaInicio, horaFinal);
    }
}


function crearMensaje(tipo, mensaje) {
    const divMensaje = document.createElement('p');
    divMensaje.textContent = mensaje;

    if(tipo === 1) {
        const espacio = document.querySelector('#mensaje1');
        espacio.appendChild(divMensaje);

        return;
    } else {
        const espacio = document.querySelector('#mensaje2');
        espacio.appendChild(divMensaje);
        
        return;
    }
}