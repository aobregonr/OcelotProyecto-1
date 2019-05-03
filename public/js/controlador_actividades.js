'use strict';

//VALIDAR FORMULARIOS CON BOOTSRAP 4 
//(se pone rojo cuando esta incompleto, verde cuando esta validado)

(function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
document.getElementById("btn_addActivity").addEventListener('click', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();

//
let cod=sessionStorage.getItem('id_usuario');
console.log(cod);
let botonRegActividad = document.querySelector('#btn_addActivity');

let inputActividad = document.querySelector('#txtActividad');
let inputImagen = document.querySelector('#image_preview');


let listaActiv = obtener_actividad();
imprimir_listaActividades();  



function obtenerDatos(){

    let bError = false;

    let actividad = inputActividad.value;
    let imagen = inputImagen.src;
   

    //Validar que todos los datos sean Correctos.

    if(inputActividad.value == ''){
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
            text: 'No se pudo registrar la actividad, por favor complete los datos pendientes.',
            type: 'warning',
          });

    }else{
        registrar_actividad(cod,actividad, imagen);

    listaActiv = obtener_actividad();   
        imprimir_listaActividades();   // Refresca la pagina con la ultima lista de Padres.
    }

    };

botonRegActividad.addEventListener('click', obtenerDatos);

// Funcion que mostrará los datos dentro de la tabla de Padres de Familia.
function imprimir_listaActividades() {  
    
    let tbody = document.querySelector('#tblActivities tbody');
    tbody.innerHTML = '';  //asegura que la tabla está vacía antes de imprimir y evtita duplicados

    for (let i = 0; i < listaActiv.length; i++) {

        if (listaActiv[i]['cod']==cod){

            let fila = tbody.insertRow();
    
            let celdaActividad = fila.insertCell();
            let celdaImagen= fila.insertCell();
            //
            celdaActividad.innerHTML = listaActiv[i]['actividad'];
            let imagen = document.createElement('img');
                imagen.classList.add('imagenTabla'); //para definir el tamano de la imagen
    
                if(listaActiv[i]['imagen']){
                    imagen.src = listaActiv[i]['imagen'];
                }else{
                    imagen.src = 'imgs/actividad.png';
                }
    
                celdaImagen.appendChild(imagen);

        };    

    };
};
