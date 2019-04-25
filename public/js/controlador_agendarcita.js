'use strict';

 const inputFecha = document.querySelector('#textFecha');
 const inputNombre = document.querySelector('#textNombre');
 const inputEmail = document.querySelector('#textEmail');
 const inputHora = document.querySelector('#textHora');
 const inputApellido = document.querySelector('#textApellido');
 const inputTelefono = document.querySelector('#textTelefono');
 const inputDescripcion = document.querySelector('#textDescripcion');
 const botonRegistrar = document.querySelector('#btnAgendar');
 const identUsuario = sessionStorage.getItem('id_usuario');


 function getParameterByName(name) {
     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
     let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
         results = regex.exec(location.search);
     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
 }

 let identCentroEducativo = getParameterByName('b');

function registrarCita(){
    let fecha = inputFecha.value;
    let nombre = inputNombre.value;
    let email = inputEmail.value;
    let hora = inputHora.value;
    let apellido = inputApellido.value;
    let telefono = inputTelefono.value;
    let descripcion = inputDescripcion.value;
    let identificadorUsuario = identUsuario;
    let identificadorCentroEducativo = identCentroEducativo;
    
    agendarCita(fecha, nombre, email, hora, apellido,
        telefono, descripcion, identificadorUsuario, identificadorCentroEducativo);
        
}

botonRegistrar.addEventListener('click', registrarCita);