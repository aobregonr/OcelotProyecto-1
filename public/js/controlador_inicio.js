'use strict';

const inputCorreo = document.querySelector('#txtCorreo');
const inputContrasenna = document.querySelector('#textContrasenna');
const botonIngresar = document.querySelector('#btnEnviar');

function obtenerDatos(){
    let correo = inputCorreo.value;
    let contrasenna = inputContrasenna.value;

    let errorBlancos = validar(correo, contrasenna);
    let usuarioAceptado = false;

    if (!errorBlancos) {
        usuarioAceptado = validar_credenciales(correo, contrasenna);
        if (usuarioAceptado) {
           // window.location.href = 'libros.html';
           alert('HOLA FUNCIONA!!');
        } else {
            alert('Hola error error contrasenna o usuario');
        }
    }
};

function validar(pcorreo, pcontrasenna) {
    let error = false;

    if (pcorreo == '') {
        error = true;
        console.log('error');
    } else {
        console.log('error');
    }

    if (pcontrasenna == '') {
        error = true;
        //inputContrasenna.classList.add('error_input');
    } else {
        console.log('error');
        //inputContrasenna.classList.remove('error_input');
    }

    return error;
};

botonIngresar.addEventListener('click', obtenerDatos);