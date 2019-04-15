'use strict';

let conectado = sessionStorage.getItem('conectado');
let nombreUsuario = sessionStorage.getItem('nombre_usuario');

if (conectado) {
    document.querySelector('#logeado').innerHTML = " <a href='#' class='nav-link' id='cerrarsesion'> Cerrar Sesion </a>";
    document.querySelector('#tituleLogin').innerHTML = " <p>Bienvenido</p> "
} else {
    document.querySelector('#logeado').innerHTML = " <a href='#' class='nav-link'  id='loginusuario'> Usuario </a>";
     document.querySelector('#tituleLogin').innerHTML = " <p>Iniciar Sesion</p> "
}

const botonCerrarSesion = document.querySelector('#cerrarsesion');

function cerrar_sesion() {
    sessionStorage.clear();
    window.location.href = 'index.html';
};

botonCerrarSesion.addEventListener('click', cerrar_sesion);