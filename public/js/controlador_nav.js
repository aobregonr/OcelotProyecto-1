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
   
    window.location.href = 'index.html';   //aqui lo que quiero es que en vez de devolver al home, salte a la ventana de inicio de sesion modal.
    //accesoRestringido();

}


function cerrar_sesion(){
    sessionStorage.clear();
    window.location.href - 'index.html';
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
