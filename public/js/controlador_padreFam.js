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


let inputTipo = document.querySelector('#txtTipo');
let inputNombre = document.querySelector('#txtNombre');
let inputApellido = document.querySelector('#txtApellido');
let inputTipoID = document.querySelector('#sltIdentificacion');
let inputIdentificacion = document.querySelector('#txtNoIdentificacion');
let inputCorreoElectronico = document.querySelector('#txtEmail');
let inputContrasena = document.querySelector('#txtPassword');
let inputConfirmarContrasena = document.querySelector('#txtPasswordConf');
let imgFoto = document.querySelector('#image_preview2');
let inputSegundoNombre = document.querySelector('#txtNombre2');
let inputSegundoApellido = document.querySelector('#txtApellido2');
let inputNacionalidad = document.querySelector('#txtNacionalidad');
let inputNumeroTelefono = document.querySelector('#txtTelefono');
let inputProvincia = document.querySelector('#txtProvincia');
let inputCanton = document.querySelector('#txtCanton');
let inputDistrito = document.querySelector('#txtDistrito');
let inputCantidadDeHijos = document.querySelector('#txtCantHijos');
let inputAnoDeNacimiento = document.querySelector('#txtAnoDeNacimiento');


let lista_PadresDeFamilia = obtener_lista_usuarios();
imprimir_lista_PadresDeFamilia();  



function obtenerDatosPadres(){

    let bError = false;

    let tipo = inputTipo.value;
    let nombrecomercial = '';
    let cedulajuridica = '';
    let tipodecentro  = '';
    let telefonoctro  = '';
    let fax = '';
    let sitioweb = '';
    let facebook = '';
    let emailinstit = '' ;      
    let direccionexacta = '';
    let anofund = 0;
    let refhist = '';
    let departamento = '';
    let ext = 0;
    let escudo = '';
    let foto = imgFoto.src;
    let bilingue = false;
    let tecnico = false;          
    let religioso = false; 
    let noreligioso = false; 
    let vocacional = false; 
    let idiomas = false; 
    let becas = false; 
    let bachilleratoint = false; 
    let mixto = false; 
    let varones = false; 
    let mujeres = false; 
    let primaria = false;           
    let secundaria = false;
    let telefono = Number(inputNumeroTelefono.value);
    let cantidaddehijos = Number( inputCantidadDeHijos.value);
    let anodenacimiento = Number(inputAnoDeNacimiento.value);
    let tipoidentificacion = inputTipoID.selectedOptions[0].textContent;  
    let identificacion = Number(inputIdentificacion.value);
    let nombre = inputNombre.value;            
    let segundonombre = inputSegundoNombre.value;
    let apellido = inputApellido.value;
    let segundoapellido = inputSegundoApellido.value;
    let nacionalidad = inputNacionalidad.value;
    let fechanacimiento = 0;
    let provincia = inputProvincia.selectedOptions[0].textContent;    
    let canton = inputCanton.selectedOptions[0].textContent;  
    let distrito = inputDistrito.selectedOptions[0].textContent;            
    let correo = inputCorreoElectronico.value;
    let contrasenna = inputContrasena.value;
    let confirmarcontrasenna = inputConfirmarContrasena.value;




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
            text: 'No se pudo registrar el usuario, por favor complete los datos pendientes.',
            type: 'warning',
          });

    }else{
        registrar_usuario(tipo, nombrecomercial, cedulajuridica, tipodecentro, telefonoctro, fax, sitioweb, facebook, emailinstit, 
                      direccionexacta, anofund, refhist, departamento, ext, escudo, foto, bilingue, tecnico, 
                      religioso, noreligioso, vocacional, idiomas, becas, bachilleratoint, mixto, varones, mujeres, primaria, 
                      secundaria, telefono, cantidaddehijos, anodenacimiento, tipoidentificacion, identificacion, nombre, 
                      segundonombre, apellido, segundoapellido, nacionalidad, fechanacimiento, provincia, canton, distrito, 
                      correo, contrasenna, confirmarcontrasenna
);

    lista_PadresDeFamilia = obtener_lista_usuarios();
    }

    imprimir_lista_PadresDeFamilia();   // Refresca la pagina con la ultima lista de Padres.

    };

botonRegistrar.addEventListener('click', obtenerDatosPadres);

// Funcion que mostrará los datos dentro de la tabla de Padres de Familia.
function imprimir_lista_PadresDeFamilia() {  
    let tbody = document.querySelector('#tblUsuarios tbody');
    tbody.innerHTML = '';  //asegura que la tabla está vacía antes de imprimir y evtita duplicados

    for (let i = 0; i < lista_PadresDeFamilia.length; i++) {
        let fila = tbody.insertRow();

        let celdaTipo = fila.insertCell();
        let celdaNombrecomercial = fila.insertCell();
        let celdaCedulajuridica = fila.insertCell(); 
        let celdaTipodecentro = fila.insertCell(); 
        let celdaTelefonoctro = fila.insertCell(); 
        let celdaFax = fila.insertCell(); 
        let celdaSitioweb = fila.insertCell();
        let celdaFacebook = fila.insertCell();
        let celdaEmailinstit = fila.insertCell();        
        let celdaDireccionexacta = fila.insertCell(); 
        let celdaAnofund = fila.insertCell(); 
        let celdaRefhist = fila.insertCell(); 
        let celdaDepartamento = fila.insertCell(); 
        let celdaExt = fila.insertCell(); 
        let celdaEscudo = fila.insertCell();
        let celdaFoto = fila.insertCell(); 
        let celdaBilingue = fila.insertCell();
        let celdaTecnico = fila.insertCell(); 
        let celdaReligioso = fila.insertCell();
        let celdaNoreligioso = fila.insertCell();
        let celdaVocacional = fila.insertCell();
        let celdaIdiomas = fila.insertCell();
        let celdaBecas = fila.insertCell();
        let celdaBachilleratoint = fila.insertCell(); 
        let celdaMixto = fila.insertCell(); 
        let celdaVarones = fila.insertCell(); 
        let celdaMujeres = fila.insertCell(); 
        let celdaPrimaria = fila.insertCell(); 
        let celdaSecundaria = fila.insertCell(); 
        let celdaTelefono = fila.insertCell(); 
        let celdaCantidaddehijos = fila.insertCell(); 
        let celdaAnodenacimiento = fila.insertCell(); 
        let celdaTipoidentificacion = fila.insertCell(); 
        let celdaIdentificacion = fila.insertCell(); 
        let celdaNombre = fila.insertCell(); 
        let celdaSegundonombre = fila.insertCell();
        let celdaApellido = fila.insertCell(); 
        let celdaSegundoapellido = fila.insertCell(); 
        let celdaNacionalidad = fila.insertCell(); 
        let celdaFechanacimiento = fila.insertCell(); 
        let celdaProvincia = fila.insertCell();
        let celdaCanton = fila.insertCell(); 
        let celdaDistrito = fila.insertCell();
        let celdaCorreo = fila.insertCell(); 
        let celdaContrasenna = fila.insertCell(); 
        let celdaConfirmarcontrasenna = fila.insertCell();


        /** 
         *usamos innerHTML para agregar contenido a cada celda. 
        */


        celdaTipo.innerHTML = lista_PadresDeFamilia[i]['tipo'];
        celdaNombrecomercial.innerHTML = lista_PadresDeFamilia[i]['nombrecomercial'];
        celdaCedulajuridica.innerHTML = lista_PadresDeFamilia[i]['cedulajuridica'];
        celdaTipodecentro.innerHTML = lista_PadresDeFamilia[i]['tipodecentro'];
        celdaTelefonoctro.innerHTML = lista_PadresDeFamilia[i]['telefonoctro'];
        celdaFax.innerHTML = lista_PadresDeFamilia[i]['fax'];
        celdaSitioweb.innerHTML = lista_PadresDeFamilia[i]['sitioweb'];
        celdaFacebook.innerHTML = lista_PadresDeFamilia[i]['facebook'];
        celdaEmailinstit.innerHTML = lista_PadresDeFamilia[i]['emailinstit'];
        celdaDireccionexacta.innerHTML = lista_PadresDeFamilia[i]['direccionexacta'];
        celdaAnofund.innerHTML = lista_PadresDeFamilia[i]['anofund'];
        celdaRefhist.innerHTML = lista_PadresDeFamilia[i]['refhist'];
        celdaDepartamento.innerHTML = lista_PadresDeFamilia[i]['departamento'];
        celdaExt.innerHTML = lista_PadresDeFamilia[i]['ext'];
        celdaEscudo.innerHTML = lista_PadresDeFamilia[i]['escudo'];
        celdaFoto.innerHTML = lista_PadresDeFamilia[i]['foto'];
        celdaBilingue.innerHTML = lista_PadresDeFamilia[i]['bilingue'];
        celdaTecnico.innerHTML = lista_PadresDeFamilia[i]['tecnico'];
        celdaReligioso.innerHTML = lista_PadresDeFamilia[i]['religioso'];
        celdaNoreligioso.innerHTML = lista_PadresDeFamilia[i]['noreligioso'];
        celdaVocacional.innerHTML = lista_PadresDeFamilia[i]['vocacional'];
        celdaIdiomas.innerHTML = lista_PadresDeFamilia[i]['idiomas'];
        celdaBecas.innerHTML = lista_PadresDeFamilia[i]['becas'];
        celdaBachilleratoint.innerHTML = lista_PadresDeFamilia[i]['bachilleratoint'];
        celdaMixto.innerHTML = lista_PadresDeFamilia[i]['mixto'];
        celdaVarones.innerHTML = lista_PadresDeFamilia[i]['varones'];
        celdaMujeres.innerHTML = lista_PadresDeFamilia[i]['mujeres'];
        celdaPrimaria.innerHTML = lista_PadresDeFamilia[i]['primaria'];
        celdaSecundaria.innerHTML = lista_PadresDeFamilia[i]['secundaria'];
        celdaTelefono.innerHTML = lista_PadresDeFamilia[i]['telefono'];
        celdaCantidaddehijos.innerHTML = lista_PadresDeFamilia[i]['cantidaddehijos'];
        celdaAnodenacimiento.innerHTML = lista_PadresDeFamilia[i]['anodenacimiento'];
        celdaTipoidentificacion.innerHTML = lista_PadresDeFamilia[i]['tipoidentificacion'];
        celdaIdentificacion.innerHTML = lista_PadresDeFamilia[i]['identificacion'];
        celdaNombre.innerHTML = lista_PadresDeFamilia[i]['nombre'];
        celdaSegundonombre.innerHTML = lista_PadresDeFamilia[i]['segundonombre'];
        celdaApellido.innerHTML = lista_PadresDeFamilia[i]['apellido'];
        celdaSegundoapellido.innerHTML = lista_PadresDeFamilia[i]['segundoapellido'];
        celdaNacionalidad.innerHTML = lista_PadresDeFamilia[i]['nacionalidad'];
        celdaFechanacimiento.innerHTML = lista_PadresDeFamilia[i]['fechanacimiento'];
        celdaProvincia.innerHTML = lista_PadresDeFamilia[i]['provincia'];
        celdaCanton.innerHTML = lista_PadresDeFamilia[i]['canton'];
        celdaDistrito.innerHTML = lista_PadresDeFamilia[i]['distrito'];
        celdaCorreo.innerHTML = lista_PadresDeFamilia[i]['correo'];
        celdaContrasenna.innerHTML = lista_PadresDeFamilia[i]['contrasenna'];
        celdaConfirmarcontrasenna.innerHTML = lista_PadresDeFamilia[i]['confirmarcontrasenna'];

    }
};
