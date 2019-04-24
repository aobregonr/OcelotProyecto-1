'use strict';

 const inputFecha = document.querySelector('#textFecha');
 const inputNombre = document.querySelector('#textNombre');
 const inputEmail = document.querySelector('#textEmail');
 const inputHora = document.querySelector('#textHora');
 const inputApellido = document.querySelector('#textApellido');
 const inputTelefono = document.querySelector('#textTelefono');
 const inputDescripcion = document.querySelector('#textDescripcion');
 const botonRegistrar = document.querySelector('#btnAgendar');

function registrarCita(){
    let fecha = inputFecha.value;
    let nombre = inputNombre.value;
    let email = inputEmail.value;
    let hora = inputHora.value;
    let apellido = inputApellido.value;
    let telefono = inputTelefono.value;
    let descripcion = inputDescripcion.value;
    
    agendarCita(fecha, nombre, email, hora, apellido,
        telefono, descripcion);
        
}

botonRegistrar.addEventListener('click', registrarCita);