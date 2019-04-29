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
document.getElementById("btn_registrar").addEventListener('click', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();


//-------------------------------------------------------------//


 const inputFecha = document.querySelector('#textFecha');
 const inputNombre = document.querySelector('#textNombre');
 const inputApellido = document.querySelector('#textApellido');
 const inputEmail = document.querySelector('#textEmail');
 const inputHora = document.querySelector('#textHora');
 const inputTelefono = document.querySelector('#textTelefono');
 const inputDescripcion = document.querySelector('#textDescripcion');
 const botonRegistrar = document.querySelector('#btnAgendar');
 const identUsuario = sessionStorage.getItem('id_usuario');



//obtener el id del URL (con el parametro que viene de la base de datos)
var url = window.location.href;
var b = url.substring(url.indexOf("=")+1);
console.log(b, identUsuario);


function registrarCita(){

    let bError = false;
    let fecha = inputFecha.value;
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let email = inputEmail.value;
    let hora = inputHora.value;
    let telefono = inputTelefono.value;
    let descripcion = inputDescripcion.value;
    let identCentroEducativo = b;
    let identPadresFamilia = identUsuario;



    if(inputFecha.value == ''){
        bError = true;
    };
    
    if(inputNombre.value == '' ){
        bError = true;
    };

    if(inputApellido.value == '' ){
        bError = true;
    };

    if(inputEmail.value == '' ){
        bError = true;
    };

    if(inputHora.value == '' ){
        bError = true;
    };

    if(inputTelefono.value == '' ){
        bError = true;
    };

    if(inputDescripcion.value == '' ){
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
            text: 'No se pudo registrar la cita, por favor complete los datos pendientes.',
            type: 'warning',
          });
    
    }else{
        agendarCita(fecha, nombre, apellido,  hora, email, telefono, descripcion, identCentroEducativo, identPadresFamilia);
        swal.fire({
            type: 'success',
            buttonsStyling: false,
            customClass: {
                title: 'title-class',
                confirmButton: 'confirm-button-class'
            },
            title: 'Actualización realizada',
            text: 'La cita se agendo con exito.'
       }) /*.then(function () {
            window.location = "perfilUsuario.html";
        });*/
               
}};


botonRegistrar.addEventListener('click', registrarCita);
