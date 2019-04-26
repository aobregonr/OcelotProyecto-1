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
 const inputEmail = document.querySelector('#textEmail');
 const inputHora = document.querySelector('#textHora');
 const inputApellido = document.querySelector('#textApellido');
 const inputTelefono = document.querySelector('#textTelefono');
 const inputDescripcion = document.querySelector('#textDescripcion');
 const botonRegistrar = document.querySelector('#btnAgendar');
 const identUsuario = sessionStorage.getItem('id_usuario');

 function getParameterByName(name) {
     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
     let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
         results = regex.exec(location.search);
     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
 }

 let identCentroEducativo = getParameterByName('b');
 let listaCitas = lista_citas;

function registrarCita(){

    let bError = false;

    let fecha = inputFecha.value;
    let nombre = inputNombre.value;
    let email = inputEmail.value;
    let hora = inputHora.value;
    let apellido = inputApellido.value;
    let telefono = inputTelefono.value;
    let descripcion = inputDescripcion.value;
    let identificadorUsuario = identUsuario;
    let identificadorCentroEducativo = identCentroEducativo;
    


    if(inputFecha.value == ''){
        bError = true;
    };
    
    if(inputNombre.value == '' ){
        bError = true;
    };

    if(inputEmail.value == '' ){
        bError = true;
    };

    if(inputHora.value == '' ){
        bError = true;
    };

    if(inputApellido.value == '' ){
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

        agendarCita(fecha, nombre, apellido, email, hora, telefono, descripcion, identificadorUsuario, identificadorCentroEducativo);        
}};


botonRegistrar.addEventListener('click', registrarCita);


    let fecha = inputFecha.value;
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let email = inputEmail.value;
    let hora = inputHora.value;
    let telefono = inputTelefono.value;
    let descripcion = inputDescripcion.value;
    let identificadorUsuario = identUsuario;
    let identificadorCentroEducativo = identCentroEducativo;



function mostrar_citas(){
    let tbody = document.querySelector('#tblCitas tbody');
    tbody.innerHTML = ''; 

    for(let i = 0; i < listaCitas.length; i++){
        let fila = tbody.insertRow();


        let celdaFecha = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaApellido = fila.insertCell(); 
        let celdaEmail = fila.insertCell(); 
        let celdaHora = fila.insertCell(); 
        let celdaTelefono = fila.insertCell(); 
        let celdaDescripcion = fila.insertCell();
        let celdaIdentUsuario = fila.insertCell();
        let celdaIdentCentroEduc= fila.insertCell();        

        //

        celdaFecha.innerHTML = listaCitas[i]['fecha'];
        celdaNombre.innerHTML = listaCitas[i]['nombre'];
        celdaApellido.innerHTML = listaCitas[i]['apellido'];
        celdaEmail.innerHTML = listaCitas[i]['email'];
        celdaHora.innerHTML = listaCitas[i]['hora'];
        celdaTelefono.innerHTML = listaCitas[i]['telefono'];
        celdaDescripcion.innerHTML = listaCitas[i]['descripcion'];
        celdaIdentUsuario.innerHTML = listaCitas[i]['identCentroEducativo'];
        celdaIdentCentroEduc.innerHTML = listaCitas[i]['identPadresFamilia'];


  }

    };
