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

//

let botonRegistrar = document.querySelector('#btn_registrar');
let inputNombre = document.querySelector('#txtNombre');
let inputApellido = document.querySelector('#txtApellido');
let inputTipoID = document.querySelector('#sltIdentificacion');
let inputIdentificacion = document.querySelector('#txtNoIdentificacion');
let inputCorreoElectronico = document.querySelector('#txtEmail');
let inputContrasena = document.querySelector('#txtPassword');
let inputConfirmarContrasena = document.querySelector('#txtPasswordConf');
let inputSegundoNombre = document.querySelector('#txtNombre2');
let inputSegundoApellido = document.querySelector('#txtApellido2');
let inputNacionalidad = document.querySelector('#txtNacionalidad');
let inputNumeroTelefono = document.querySelector('#txtTelefono');
let inputProvincia = document.querySelector('#txtProvincia');
let inputCanton = document.querySelector('#txtCanton');
let inputDistrito = document.querySelector('#txtDistrito');
let inputCantidadDeHijos = document.querySelector('#txtCantHijos');
let inputAnoDeNacimiento = document.querySelector('#txtAnoDeNacimiento');


let lista_PadresDeFamilia = obtener_lista_padresDeFam();
imprimir_lista_PadresDeFamilia();  



function obtenerDatosPadres(){

    let bError = false;

    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let tipoID = inputTipoID.selectedOptions[0].textContent;  
    let identificacion = Number(inputIdentificacion.value);
    let correoElectronico = inputCorreoElectronico.value;
    let contrasena = inputContrasena.value;
    let confirmarContrasena = inputConfirmarContrasena.value;
    let segundoNombre = inputSegundoNombre.value;
    let segundoApellido = inputSegundoApellido.value;
    let nacionalidad = inputNacionalidad.value;
    let numeroTelefono = Number(inputNumeroTelefono.value);
    let provincia = inputProvincia.selectedOptions[0].textContent;         
    let canton = inputCanton.selectedOptions[0].textContent;          
    let distrito = inputDistrito.selectedOptions[0].textContent;     
    let cantidadDeHijos = Number(inputCantidadDeHijos.value);
    let anoDeNacimiento = Number(inputAnoDeNacimiento.value);


    //expresiones regulares
    let regExpNumeros = /^[0-9]*$/;  //verificar que los datos numericos solo contengan numeros del 0 al 9
    let regExpEmail = /^\S+@\S+$/; //verificar email
    let regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //contrasena 8 digitos minimo, 1 mayuscula, 1 minuscula, 1 caracter especial, 1 numero.
    let regExpYear = /(?:(?:19|20)[0-9]{2})/; //verificar anio entre 1900 y 2099


    //Validar que todos los datos sean Correctos.

    if(inputNombre.value == ''){
        bError = true;
    };
    
    if(inputApellido.value == ''){
        bError = true;
    };
    
    if(identificacion.value == '' || regExpNumeros.test(inputIdentificacion.value) == false){
        bError = true;
    };

    if(inputCorreoElectronico.value == '' || regExpEmail.test(inputCorreoElectronico.value) == false){
        bError = true;
    };

    if( inputContrasena.value == '' || regExpPassword.test(inputContrasena.value) == false){
        bError = true;
    }
    //validar confirmacion de contrasenia
    if(inputConfirmarContrasena.value != inputContrasena.value){
        bError = true;
    };

    if(inputNumeroTelefono.value == '' || regExpNumeros.test(inputNumeroTelefono.value) == false){
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
            text: 'No se pudo registrar el centro educativo, por favor complete los datos pendientes.',
            type: 'warning',
          });

    }else{
        registrar_padresFamilia(nombre, apellido, tipoID, identificacion, correoElectronico, contrasena, 
                     confirmarContrasena, segundoNombre, segundoApellido, nacionalidad, numeroTelefono, 
                     provincia, canton, distrito, cantidadDeHijos, anoDeNacimiento);

    lista_PadresDeFamilia = obtener_lista_padresDeFam();
    }

    imprimir_lista_PadresDeFamilia();   // Refresca la pagina con la ultima lista de Padres.

    };

botonRegistrar.addEventListener('click', obtenerDatosPadres);

// Funcion que mostrará los datos dentro de la tabla de Padres de Familia.
function imprimir_lista_PadresDeFamilia() {  
    let tbody = document.querySelector('#tblPadresDeFam tbody');
    tbody.innerHTML = '';  //asegura que la tabla está vacía antes de imprimir y evtita duplicados

    for (let i = 0; i < lista_PadresDeFamilia.length; i++) {
        let fila = tbody.insertRow();

        let celdaNombre = fila.insertCell();
        let celdaApellido = fila.insertCell();
        let celdaTipoID = fila.insertCell();
        let celdaIdentificacion = fila.insertCell();
        let celdaCorreoElectronico = fila.insertCell();
        let celdasContrasena = fila.insertCell();
        let celdaConfirmarContrasena = fila.insertCell();
        let celdaSegundoNombre = fila.insertCell();
        let celdaSegundoApellido = fila.insertCell();
        let celdaNacionalidad = fila.insertCell();
        let celdaNumeroTelefono = fila.insertCell();
        let celdaProvincia = fila.insertCell();
        let celdaCanton = fila.insertCell();
        let celdaDistrito = fila.insertCell();
        let celdaCantidadDeHijos = fila.insertCell();
        let celdaAnoDeNacimiento = fila.insertCell();

        /** 
         *usamos innerHTML para agregar contenido a cada celda. 
        */
        celdaNombre.innerHTML = lista_PadresDeFamilia[i]['nombre'];
        celdaApellido.innerHTML = lista_PadresDeFamilia[i]['apellido'];
        celdaTipoID.innerHTML = lista_PadresDeFamilia[i]['tipoID'];
        celdaIdentificacion.innerHTML = lista_PadresDeFamilia[i]['identificacion'];
        celdaCorreoElectronico.innerHTML = lista_PadresDeFamilia[i]['correoElectronico'];
        celdasContrasena.innerHTML = lista_PadresDeFamilia[i][ 'contrasena'];
        celdaConfirmarContrasena.innerHTML = lista_PadresDeFamilia[i]['confirmarContrasena'];
        celdaSegundoNombre.innerHTML = lista_PadresDeFamilia[i]['segundoNombre'];
        celdaSegundoApellido.innerHTML = lista_PadresDeFamilia[i]['segundoApellido'];
        celdaNacionalidad.innerHTML = lista_PadresDeFamilia[i]['nacionalidad'];
        celdaNumeroTelefono.innerHTML = lista_PadresDeFamilia[i]['numeroTelefono'];
        celdaProvincia.innerHTML = lista_PadresDeFamilia[i]['provincia'];
        celdaCanton.innerHTML = lista_PadresDeFamilia[i]['canton'];
        celdaDistrito.innerHTML = lista_PadresDeFamilia[i]['distrito'];
        celdaCantidadDeHijos.innerHTML = lista_PadresDeFamilia[i]['cantidadDeHijos'];
        celdaAnoDeNacimiento.innerHTML = lista_PadresDeFamilia[i]['anoDeNacimiento'];

    }
};
