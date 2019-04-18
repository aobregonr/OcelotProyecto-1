'use strict';

const inputCorreo = document.querySelector('#txtCorreo');
const inputContrasenna = document.querySelector('#txtContrasenna');
const botonIngresar = document.querySelector('#btnIngresar');
const botonRegistro = document.querySelector('#btnRegistro');

function obtenerDatos(){
    let correo = inputCorreo.value;
    let contrasenna = inputContrasenna.value;

    let errorBlancos = validar(correo, contrasenna);
    let usuarioAceptado = false;

    if (!errorBlancos) {
        usuarioAceptado = validar_credenciales(correo, contrasenna);
        if (usuarioAceptado.success == true && usuarioAceptado.usuario.tipo == 'admin') {  // verifica si es admin
            sessionStorage.setItem('tipo_usuario', 'admin');
            sessionStorage.setItem('nombre_usuario', usuarioAceptado.usuario['pnombre']);
            window.location.href = 'perfilAdmin.html';
        }else{
            if (usuarioAceptado.success == true && usuarioAceptado.usuario.tipo == 'CentroEducativo'){   //verifica si es centro
                sessionStorage.setItem('tipo_usuario', 'CentroEducativo');
                sessionStorage.setItem('nombre_usuario', usuarioAceptado.usuario['pnombre']); 
                window.location.href = 'perfilCentroEducEdit.html';
            }else{
                if (usuarioAceptado.success == true && usuarioAceptado.usuario.tipo == 'PadreFam'){  //verifica si es padre de familia
                    sessionStorage.setItem('tipo_usuario', 'PadreFam');
                    sessionStorage.setItem('nombre_usuario', usuarioAceptado.usuario['pnombre']); 
                    window.location.href = 'perfilUsuario.html';
                }else{
                    swal.fire({
                                type : 'warning',
                                buttonsStyling: false,
                                customClass: {
                                title: 'title-class',
                                confirmButton: 'confirm-button-class'},
                                title: 'No se pudo iniciar sesión.',
                                text: 'Correo o contraseña inválidos, por favor verifique los datos.'
                              });
                }
            }
        }
    } 
};


function validar(pcorreo, pcontrasenna) {
    let error = false;

    if (pcorreo == '') {
        error = true;
        inputCorreo.classList.add('error_input');
    } else {
        inputCorreo.classList.remove('error_input');
    }

    if (pcontrasenna == '') {
        error = true;
        inputContrasenna.classList.add('error_input');
    } 
    if(pcorreo == '' || pcontrasenna == ''){ //esto es si le dan iniciar sesion sin haber escrito nada
                    swal.fire({
                                type : 'warning',
                                buttonsStyling: false,
                                customClass: {
                                title: 'title-class',
                                confirmButton: 'confirm-button-class'},
                                //title: 'No se pudo iniciar sesión.',
                                text: 'Por favor ingrese su correo y contraseña.'
                              });

    }else {
        inputContrasenna.classList.remove('error_input');
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
        window.location.href = "registroPadreFamilia.html";
    } else if(tipo == 'centroeducativo'){
        window.location.href = "registroCentroEducativo.html";
    }else if (tipo == ''){
                swal.fire({
                            type : 'warning',
                            buttonsStyling: false,
                            customClass: {
                            title: 'title-class',
                            confirmButton: 'confirm-button-class'},
                            //title: 'No se puede hacer el registro.',
                            text: 'Por favor seleccione si es padre de familia o centro educativo.'
                          });
    }

}


botonIngresar.addEventListener('click', obtenerDatos);
botonRegistro.addEventListener('click', reenviarRegistro);