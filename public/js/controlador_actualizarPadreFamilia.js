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

//-----------------------------------------------------------------------------------//



const botonActualizar = document.querySelector('#btn_registrar');

//Estos son los inputs del padre fam.
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


//obtener el id del URL (con el parametro que viene de la base de datos)
let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);//Toma el parámetro id del url y retorna el valor
    return id;
};


let _id = get_param('id_usuario'); 
console.log(_id);

let user= obtener_usuario_por_id(_id) //obtener toda la info del usuario actual


let mostrardatos = () =>{

	inputTipo.value = user.tipo;
	inputNombre.value = user.nombre;
	inputApellido.value =user.apellido;
	
	let tipo_id = document.querySelectorAll('#sltIdentificacion option')

	for(let i=0; i < tipo_id.length; i++){
		if (tipo_id[i].textContent == user.tipoidentificacion){
			tipo_id.selected = true;
			inputTipoID.value=tipo_id[i].value
			}
	}

	inputIdentificacion.value = user.identificacion;
	inputCorreoElectronico.value = user.correo;
	inputContrasena.value = user.contrasenna;
	inputConfirmarContrasena.value = user.confirmarcontrasenna;
	imgFoto.value = user.foto;
	inputSegundoNombre.value = user.segundonombre;
	inputSegundoApellido.value = user.segundoapellido;
	inputNacionalidad.value = user.nacionalidad;
	inputNumeroTelefono.value = user.telefono;

	let opciones_provincias = document.querySelectorAll('#txtProvincia option')

	for(let i=0; i < opciones_provincias.length; i++){
		if (opciones_provincias[i].textContent == user.provincia){
			opciones_provincias.selected = true;
			inputProvincia.value=opciones_provincias[i].value
			llenar_cantones();
			}
	}

	let opciones_cantones = document.querySelectorAll('#txtCanton option')
	console.log(opciones_cantones.textContent)

	for(let i=0; i < opciones_cantones.length; i++){
		if (opciones_cantones[i].textContent == user.canton){
			opciones_cantones.selected = true;
			inputCanton.value=opciones_cantones[i].value
			llenar_distritos();
			}
	}

	let opciones_distritos = document.querySelectorAll('#txtDistrito option')

	for(let i=0; i < opciones_distritos.length; i++){
		if (opciones_distritos[i].textContent == user.distrito){
			opciones_distritos.selected = true;
			inputDistrito.value=opciones_distritos[i].value

			}
	}

	inputCantidadDeHijos.value = user.cantidaddehijos;
	inputAnoDeNacimiento.value = user.anodenacimiento;



};


//si el usuario existe, retornar datos en el formulario
if(user){
	mostrardatos();
};



function obtener_datos() {

	let bError = false;

	let id = _id;
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
    let foto = user.foto;
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
    let rankingmep = 0;
    let califnum = null;
    let rankingpadres = 0;
    let califanno = 0;
   	let codigoverif = user.codigoverif;
    let codigoautenticar = user.codigoautenticar;
    let estado = 'activo';

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
            text: 'No se pudo actualizar el usuario, por favor complete los datos pendientes.',
            type: 'warning',
          });
	
	}else{
    actualizar_usuario(id, tipo, nombrecomercial, cedulajuridica, tipodecentro, telefonoctro, fax, sitioweb, facebook, emailinstit, 
                      direccionexacta, anofund, refhist, departamento, ext, escudo, foto, bilingue, tecnico, 
                      religioso, noreligioso, vocacional, idiomas, becas, bachilleratoint, mixto, varones, mujeres, primaria, 
                      secundaria, telefono, cantidaddehijos, anodenacimiento, tipoidentificacion, identificacion, nombre, 
                      segundonombre, apellido, segundoapellido, nacionalidad, fechanacimiento, provincia, canton, distrito, 
                      correo, contrasenna, confirmarcontrasenna, rankingmep, califnum, rankingpadres, califanno, 
                      codigoverif, codigoautenticar, estado
	)

	 swal.fire({
        	type : 'success',
            buttonsStyling: false,
			customClass: {
			title: 'title-class',
			confirmButton: 'confirm-button-class'},
            title: 'Actualización realizada',
            text: 'El padre de familia ha sido actualizado con éxito.'
          }).then(function() {
    		window.location = "baseDatosUsuarios.html";
    	});


}	 
 };



botonActualizar.addEventListener('click', obtener_datos);
