'use strict';

let conectado = sessionStorage.getItem('conectado');
let tipoUsuario = sessionStorage.getItem('tipo_usuario');
let nombreUsuario = sessionStorage.getItem('nombre_usuario');
let apellidoUsuario = sessionStorage.getItem('apellido_usuario');


if (conectado) {
    document.querySelector('#invitado').classList.add('hide'); //esconder user invitado
    document.querySelector('#logeado').classList.remove('hide'); //mostrar user logeado 


     switch(tipoUsuario){
        case 'admin':

        //poner el nombre del admin en el header
        document.querySelector('#logeado').innerHTML = '<a class="headerlink" href="perfilAdmin.html"><i class="fas fa-user"></i>'+' ' + nombreUsuario + ' '+ apellidoUsuario + ' (Admin)' + '</a>'; //perfil admin

        break;

        case 'CentroEducativo':

        //poner el nombre del centro en el header
        document.querySelector('#logeado').innerHTML = '<a class="headerlink" href="perfilCentroEducEdit.html"><i class="fas fa-user"></i>'+' ' + nombreUsuario + '</a>'; //perfil del centro

        //restringir
        navBusqueda.classList.add('hide');  //ocultar busqueda avanzada
        navCentros.classList.add('hide');  //ocultar todos los colegios
        linkCentros.classList.add('hide'); 
        linkCentrosLi.classList.add('hide'); 
        olvidoContrasenna.classList.add('hide'); 
        advanceSearch.href = '#';

        break;

        case 'PadreFam':

        //poner el nombre del padre de fam en el header
        document.querySelector('#logeado').innerHTML = '<a class="headerlink" href="perfilUsuario.html"><i class="fas fa-user"></i>'+' ' + nombreUsuario + ' '+ apellidoUsuario + '</a>'; //perfil padre fam

        //restringir
        olvidoContrasenna.classList.add('hide'); 

        break;
    }

} else {
    document.querySelector('#cerrarsesion').classList.add('hide'); //esconder cerrar sesion mientras user invitado este activo.
}


const botonCerrarSesion = document.querySelector('#cerrarsesion');


function cerrarSesion(){
    sessionStorage.clear();
    window.location.href = 'index.html';
}

botonCerrarSesion.addEventListener('click', cerrarSesion);




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
