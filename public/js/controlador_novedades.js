'use strict';


let id= sessionStorage.getItem('id_usuario');
let botonRegNews = document.querySelector('#btnRegistrarNovedad');
let inputImagenNews = document.querySelector('#image_preview2');


let listaNovedades = obtener_novedad();
imprimir_listaNovedades();  



function obtenerDatos(){

    let bError = false;

    let imagen = inputImagenNews.src;


    //Validar que todos los datos sean Correctos.

    if(inputImagenNews.src == null){
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

// Funcion que mostrará los datos dentro de la tabla de novedades

function imprimir_listaNovedades() {  
    
    let tbody = document.querySelector('#tblNewsfeed tbody');
    tbody.innerHTML = '';  //asegura que la tabla está vacía antes de imprimir y evita duplicados

    for (let i = 0; i < listaNovedades.length; i++) {

        if (listaNovedades[i]['id']==id){


            let fila = tbody.insertRow();
    
            let celdaImagen= fila.insertCell();
            //
            let imagen = document.createElement('img');
                imagen.classList.add('imagenNews'); //para definir el tamano de la imagen
    
                if(listaNovedades[i]['imagen']){
                    imagen.src = listaNovedades[i]['imagen'];
                }else{
                    imagen.src = '';
                }
    
                celdaImagen.appendChild(imagen);



        };
     


    }
};
