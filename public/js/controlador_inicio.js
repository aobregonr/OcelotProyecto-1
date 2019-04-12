'use strict';
const inputCorreo = document.querySelector('#txtCorreo');
const inputContrasenna = document.querySelector('#textContrasenna');
const botonIngresar = document.querySelector('#btnEnviar');
const botonRegistro = document.querySelector('#btnRegistro');

function obtenerDatos(){
    let correo = inputCorreo.value;
    let contrasenna = inputContrasenna.value;

    let errorBlancos = validar(correo, contrasenna);
    let usuarioAceptado = false;

    if (!errorBlancos) {
        usuarioAceptado = validar_credenciales(correo, contrasenna);
        if (usuarioAceptado.success == true) {
           window.location.href = '../perfilAdmin.html';
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

function reenviarRegistro(){
    const r = document.getElementsByName('tipo');
    let tipo = "";
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked){
            tipo = r[i].value;
        }
    }
    
    if (tipo == 'padrefamilia'){
        window.location.href = "../registroPadreFamilia.html";
    } else if(tipo == 'centroeducativo'){
        window.location.href = "../registroCentroEducativo.html";
    }

}

botonRegistro.addEventListener('click', reenviarRegistro);
botonIngresar.addEventListener('click', obtenerDatos);