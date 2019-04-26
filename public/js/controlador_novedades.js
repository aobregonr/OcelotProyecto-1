'use strict';


let id= sessionStorage.getItem('id_usuario');
let botonAddNews = document.querySelector('#btnSeleccionarNovedad');
let botonRegNews = document.querySelector('#btnRegistrarNovedad');
let inputImagenNews = document.querySelector('#newsfeed_img');


let listaNovedades = obtener_novedad();
//imprimir_listaNovedades();  



function obtenerDatos(){

    let bError = false;

    let imagen = inputImagen.src;


    //Validar que todos los datos sean Correctos.

    if(inputImagen.value == ''){
        bError = true;
    };


    if(bError == true){
        swal.fire({
            type : 'info',
            buttonsStyling: false,
            customClass: {
            title: 'title-class',
            confirmButton: 'confirm-button-class'},
            title: 'Registro incorrecto',
            text: 'No se pudo registrar la novedad, por favor suba una imagen.',
            type: 'warning',
          });

    }else{
        registrar_novedad(id, imagen);

    listaNovedades = obtener_novedad();
    }

    //imprimir_listaNovedades();   // Refresca la pagina con la ultima lista de Padres.

    };

botonRegNews.addEventListener('click', obtenerDatos);

// Funcion que mostrará los datos dentro de la tabla de Padres de Familia.
/*
function imprimir_listaNovedades() {  
    
    let tbody = document.querySelector('#tblNewsfeed tbody');
    tbody.innerHTML = '';  //asegura que la tabla está vacía antes de imprimir y evtita duplicados

    for (let i = 0; i < listaNovedades.length; i++) {

        if (listaNovedades[i]['cod']==id){

            let fila = tbody.insertRow();
    
            let celdaImagen= fila.insertCell();
            //
            celdaimagen.innerHTML = listaNovedades[i]['imagen'];
        };
     


    }
};
*/