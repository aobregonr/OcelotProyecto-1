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
document.getElementById("btn_addFaqs").addEventListener('click', function(event) {
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

let botonRegFaqs = document.querySelector('#btn_addFaqs');

let inputPregunta = document.querySelector('#txtPregunta');
let inputRespuesta = document.querySelector('#txtRespuesta');


let listaFaqs = obtener_faq();
imprimir_listaFaqs(); 



function obtenerDatos(){

    let bError = false;

    let pregunta = inputPregunta.value;
    let respuesta = inputRespuesta.value;


    //Validar que todos los datos sean Correctos.

    if(inputPregunta.value == ''){
        bError = true;
    };

    if(inputRespuesta.value == ''){
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
            text: 'No se pudo registrar la pregunta frecuente, por favor complete los datos pendientes.',
            type: 'warning',
          });

    }else{
        registrar_faq(pregunta, respuesta);

    listaFaqs = obtener_faq();
    }

    imprimir_listaFaqs();   // Refresca la pagina con la ultima lista de Padres.

    };

botonRegFaqs.addEventListener('click', obtenerDatos);

// Funcion que mostrará los datos dentro de la tabla de Padres de Familia.
function imprimir_listaFaqs() {  
    let tbody = document.querySelector('#tblFaqs tbody');
    tbody.innerHTML = '';  //asegura que la tabla está vacía antes de imprimir y evtita duplicados

    for (let i = 0; i < listaFaqs.length; i++) {
        let fila = tbody.insertRow();

        let celdaPregunta = fila.insertCell();
        let celdaRespuesta= fila.insertCell();
        //
        celdaPregunta.innerHTML = listaFaqs[i]['pregunta'];
        celdaRespuesta.innerHTML = listaFaqs[i]['respuesta'];
     


    }
};
