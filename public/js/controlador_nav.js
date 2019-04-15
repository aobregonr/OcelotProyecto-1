'use strict';

let conectado = sessionStorage.getItem('conectado');
let tipoUsuario = sessionStorage.getItem('tipo_usuario');

if(conectado){
    switch(tipoUsuario){
        case 'admin':

        break;
        case 'CentroEducativo':

        break;
        case 'PadreFam':

        break;
    }
} else {
    window.location.href = 'index.html';
}

function cerrar_sesion(){
    sessionStorage.clear();
    window.location.href - 'index.html';
}