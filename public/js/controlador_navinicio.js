'use strict';

let enlaces = document.querySelectorAll('#navPrincipal a');
let conectado = sessionStorage.getItem('conectado');
let tipoUsuario = sessionStorage.getItem('tipo_usuario');
let nombreUsuario = sessionStorage.getItem('nombre_usuario');
let apellidoUsuario = sessionStorage.getItem('apellido_usuario');

//mostrar el tipo de usuario y el cierre de sesion. 

if (conectado) {
    document.querySelector('#invitado').classList.add('hide'); //esconder user invitado
    document.querySelector('#logeado').classList.remove('hide'); //mostrar user logeado 
    document.querySelector('#tituleLogin').innerHTML = " <p>Bienvenido </p> ";  // que diga bienvenido en vez de iniciar sesion.

} else {
    document.querySelector('#tituleLogin').innerHTML = " <p>Iniciar Sesión</p> "
    document.querySelector('#cerrarsesion').classList.add('hide'); //esconder cerrar sesion mientras user invitado este activo.
}



//iniciar sesion modal

const botonIniciarSesion = document.querySelector('#invitado');

function iniciarsesionModal(){

    $("#iniSesion").modal()};

botonIniciarSesion.addEventListener('click', iniciarsesionModal);



// cerrar sesion
const botonCerrarSesion = document.querySelector('#cerrarsesion');

function cerrar_sesion() {
    sessionStorage.clear();
    window.location.href = 'index.html';
};

botonCerrarSesion.addEventListener('click', cerrar_sesion);


// validaciones acorde al usuario


if(conectado){
    switch(tipoUsuario){
        case 'admin':

        //poner el nombre del admin en el header
        document.querySelector('#logeado').innerHTML = '<a class="nav-link" href="perfilAdmin.html"><i class="fas fa-user"></i>'+' ' + nombreUsuario + ' '+ apellidoUsuario + ' (Admin)' + '</a>'; //perfil admin

        break;
        case 'CentroEducativo':

        //poner el nombre del centro en el header
        document.querySelector('#logeado').innerHTML = '<a class="nav-link" href="perfilCentroEducEdit.html"><i class="fas fa-user"></i>'+' ' + nombreUsuario + '</a>'; //perfil del centro


        //esto aun no sirve
        enlaces[2].classList.add('hide');  //ocultar busqueda avanzada
        enlaces[3].classList.add('hide');  //ocultar todos los colegios

        break;
        case 'PadreFam':

        //poner el nombre del padre de fam en el header
        document.querySelector('#logeado').innerHTML = '<a class="nav-link" href="perfilUsuario.html"><i class="fas fa-user"></i>'+' ' + nombreUsuario + ' '+ apellidoUsuario + '</a>'; //perfil padre fam

        break;
    }
} else {

   //window.location.href = 'index.html';   
    //aqui lo que quiero es que en vez de devolver al home, salte a la ventana de inicio de sesion modal.
    //accesoRestringido();

}


function accesoRestringido(){
    swal.fire({
            type : 'warning',
            buttonsStyling: false,
            customClass: {
            title: 'title-class',
            confirmButton: 'confirm-button-class'},
            title: 'Acceso Restringido',
            text: 'Por favor inicie sesión.',
          });
}