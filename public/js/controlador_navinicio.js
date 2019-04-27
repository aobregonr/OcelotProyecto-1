'use strict';


//let enlaces = document.querySelectorAll('#navPrincipal a');
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
// validaciones acorde al usuario

//elementos que deben ser ocultos o restringidos dependiendo del usuario:
const navBusqueda = document.getElementById("navBusqueda"); //nav busqueda avanzada
const navCentros =  document.getElementById("navCentros"); //nad todos los colegios
const btnRegistro = document.getElementById("btnRegistro"); // boton registrar (disable cuando inicio sesion padre o centro)
const radioPadre = document.getElementById("radPadre"); 
const radioCentro = document.getElementById("radCentro"); //los radio buttons (deben estar disable cuando ya se inicio sesion padre o centro)
const btnBusquedaSimple = document.getElementById("btnSearch1"); //busqueda simple boton.
const advanceSearch = document.getElementById("advanceSearch"); //busqueda avanzada link dentro de busqueda simple. 
const linkCentros = document.getElementById("linkCentros"); //link bajo la busqueda simple de todos los centros
const linkCentrosLi = document.getElementById("linkCentrosLi"); 
const linkReportes = document.getElementById("linkReportes"); //link bajo la busqueda simple de reportes
const olvidoContrasenna = document.querySelector('#forgotPasw');
const olvidoContrasennaModal = document.querySelector('#forgotPswModal');



if(conectado){
    switch(tipoUsuario){
        case 'admin':

        //poner el nombre del admin en el header
        document.querySelector('#logeado').innerHTML = '<a class="headerlink" href="perfilAdmin.html"><i class="fas fa-user"></i>'+' ' + nombreUsuario + ' '+ apellidoUsuario + ' (Admin)' + '</a>'; //perfil admin

        //restringir
        radioPadre.disabled = true;
        radioCentro.disabled = true;
        btnRegistro.disabled = true;
        olvidoContrasenna.classList.add('hide'); 

        break;

        case 'CentroEducativo':

        //poner el nombre del centro en el header
        document.querySelector('#logeado').innerHTML = '<a class="headerlink" href="perfilCentroEducEdit.html"><i class="fas fa-user"></i>'+' ' + nombreUsuario + '</a>'; //perfil del centro

        //restringir
        navBusqueda.classList.add('hide');  //ocultar busqueda avanzada
        navCentros.classList.add('hide');  //ocultar todos los colegios
        radioPadre.disabled = true;
        radioCentro.disabled = true;
        btnRegistro.disabled = true;
        linkCentros.classList.add('hide'); 
        linkCentrosLi.classList.add('hide'); 
        olvidoContrasenna.classList.add('hide'); 
        advanceSearch.href = '#';
        advanceSearch.addEventListener('click', accesoRestringido);
        btnBusquedaSimple.disabled = true;

        break;

        case 'PadreFam':

        //poner el nombre del padre de fam en el header
        document.querySelector('#logeado').innerHTML = '<a class="headerlink" href="perfilUsuario.html"><i class="fas fa-user"></i>'+' ' + nombreUsuario + ' '+ apellidoUsuario + '</a>'; //perfil padre fam

        //restringir
        radioPadre.disabled = true;
        radioCentro.disabled = true;
        btnRegistro.disabled = true;
        olvidoContrasenna.classList.add('hide'); 

        break;
    }

} else {

    //usuario no registrado (acceso restringido)
    navBusqueda.href = '#';
    navBusqueda.addEventListener('click', accesoRestringido);
    navCentros.href = '#';
    navCentros.addEventListener('click', accesoRestringido);
    linkCentros.href = '#';
    linkCentros.addEventListener('click', accesoRestringido);
    linkReportes.href = '#';
    linkReportes.addEventListener('click', accesoRestringido);
    advanceSearch.href = '#';
    advanceSearch.addEventListener('click', accesoRestringido);
    btnBusquedaSimple.disabled = true;
}


function accesoRestringido(){
    swal.fire({
            type : 'warning',
            buttonsStyling: false,
            customClass: {
            title: 'title-class',
            confirmButton: 'confirm-button-class'},
            title: 'Acceso Restringido',
            text: 'Su usuario no tiene permiso para ingresar a esta sección del sitio.',
          });
}


const email = document.querySelector('#txtEmailRecover');
const botonEnviarContrasena = document.querySelector('#BtnForgotPasw');


function forgotPass(){

    $("#passTemp").modal()
};

function enviarContrasena(){

    let inputEmail = email.value;
    recuperar_contrasena(inputEmail);

}


olvidoContrasenna.addEventListener('click', forgotPass);
olvidoContrasennaModal.addEventListener('click', forgotPass);
