'use strict';


let user_tipo= sessionStorage.getItem('tipo_usuario');


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


const botonRegistrar = document.querySelector('#btn_registrar');

//Estos son los inputs del centro educativo.
const inputTipo = document.querySelector('#txtTipo');
const inputNombreComercial = document.querySelector('#txtNombreComercial');
const inputCedulaJuridica = document.querySelector('#txtCedulaJuridica');
const inputTipoDeCentro = document.querySelector('#txtTipoCentroEducat');
const inputTelefonoCtro = document.querySelector('#txtTelefonoCtro');
const inputFax = document.querySelector('#txtFax');
const inputSitioWeb = document.querySelector('#txtSitioWeb');
const inputFacebook = document.querySelector('#txtFacebookOficial');
const inputEmailInstit = document.querySelector('#txtEmailInstit');
const inputPassword = document.querySelector('#txtPassword');
const inputPasswordConf = document.querySelector('#txtPasswordConf');
const inputAnoFund = document.querySelector('#txtAnoFund');
const inputHisRef = document.querySelector('#txtHistRef');
const inputProvincia = document.querySelector('#txtProvincia');
const inputCanton = document.querySelector('#txtCanton');
const inputDistrito = document.querySelector('#txtDistrito');
const inputDireccionExacta = document.querySelector('#txtDireccionExacta');
//
const inputNombre = document.querySelector('#txtNombre');
const inputNombre2 = document.querySelector('#txtNombre2');
const inputApellido = document.querySelector('#txtApellido');
const inputApellido2 = document.querySelector('#txtApellido2');
const inputTipoID = document.querySelector('#sltIdentificación');
const inputIDnumber = document.querySelector('#txtNoIdentificacion');
const inputEmail = document.querySelector('#txtEmail');
const inputDepartamento = document.querySelector('#txtDepartamento');
const inputTelefono = document.querySelector('#txtTelefonoContact');
const inputExt = document.querySelector('#txtExt');
const imgEscudo = document.querySelector('#image_preview');
const imgFoto = document.querySelector('#image_preview2');
//
//CHECKBOXES
const inputBilingue = document.querySelector('#cbBilingue');
const inputTecnico = document.querySelector('#cbTecnico');
const inputReligioso = document.querySelector('#cbReligioso');
const inputNoReligioso = document.querySelector('#cbNoReligioso');
const inputVocacional = document.querySelector('#cbVocacional');
const inputIdiomas = document.querySelector('#cbIdiomas');
const inputBecas = document.querySelector('#cbBecas');
const inputBachilleratoInt = document.querySelector('#cbBachilleratoInt');
const inputMixto = document.querySelector('#cbMixto');
const inputVarones = document.querySelector('#cbVarones');
const inputMujeres = document.querySelector('#cbMujeres');
//
const inputPrimaria = document.querySelector('#cbPrimaria');
const inputSecundaria = document.querySelector('#cbSecundaria');


let lista_centros = obtener_lista_usuarios();
mostrar_lista_centros();  


//---------------------------------------------------------------------------//
//     generar codigo verificacion
//---------------------------------------------------------------------------//

var letras = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I');
var numeros = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9');

var letra1 = letras[Math.floor(Math.random()*letras.length)];
var numero1 = numeros[Math.floor(Math.random()*numeros.length)];
var letra2 = letras[Math.floor(Math.random()*letras.length)];
var numero2 = numeros[Math.floor(Math.random()*numeros.length)];
var letra3 = letras[Math.floor(Math.random()*letras.length)];
var numero3 = numeros[Math.floor(Math.random()*numeros.length)];


var codigoVerif = letra1 + numero1 + letra2 + numero2 + letra3 + numero3;

//---------------------------------------------------------------------------//



function obtenerDatos(){

	let bError = false;


	let tipo = inputTipo.value;
    let nombrecomercial = inputNombreComercial.value;
    let cedulajuridica = Number(inputCedulaJuridica.value);
    let tipodecentro  = inputTipoDeCentro.selectedOptions[0].textContent;
    let telefonoctro  = Number(inputTelefonoCtro.value);
    let fax = Number(inputFax.value); 
    let sitioweb = inputSitioWeb.value;   
    let facebook = inputFacebook.value;     
    let emailinstit = inputEmailInstit.value;      
    let direccionexacta = inputDireccionExacta.value;
    let anofund =  Number(inputAnoFund.value);     
    let refhist = inputHisRef.value;
    let departamento = inputDepartamento.value;   
    let ext = Number(inputExt.value); 
	let escudo = imgEscudo.src;
	let foto = imgFoto.src;
    let bilingue = inputBilingue.checked;
	let tecnico = inputTecnico.checked;
	let religioso = inputReligioso.checked;
	let noreligioso = inputNoReligioso.checked;
	let vocacional = inputVocacional.checked;
	let idiomas = inputIdiomas.checked;
	let becas = inputBecas.checked;
	let bachilleratoint = inputBachilleratoInt.checked;
	let mixto = inputMixto.checked;
	let varones = inputVarones.checked;
	let mujeres = inputMujeres.checked;
	let primaria = inputPrimaria.checked;
	let secundaria = inputSecundaria.checked;
    let telefono = Number(inputTelefono.value);
    let cantidaddehijos = 0;
    let anodenacimiento = 0;
    let tipoidentificacion = inputTipoID.selectedOptions[0].textContent;  
    let identificacion = Number(inputIDnumber.value);
    let nombre = inputNombre.value;            
    let segundonombre = inputNombre2.value; 
    let apellido = inputApellido.value;
    let segundoapellido = inputApellido2.value;
    let nacionalidad = '';
    let fechanacimiento = 0;
    let provincia = inputProvincia.selectedOptions[0].textContent;    
    let canton = inputCanton.selectedOptions[0].textContent;  
    let distrito = inputDistrito.selectedOptions[0].textContent;            
    let correo = inputEmail.value;
    let contrasenna = inputPassword.value;  
    let confirmarcontrasenna = inputPasswordConf.value;   
    let rankingmep = 5;
    let califnum = 0;
    let rankingpadres = 5;
    let califanno = 2019;
    let codigoverif = codigoVerif;
    let codigoautenticar = '';
    let estado;

    if (user_tipo=='admin'){
        estado = 'activo';
        
    }else{
        estado = 'pendiente';
    };
    



	//expresiones regulares
	let regExpNumeros = /^[0-9]*$/;  //verificar que los datos numericos solo contengan numeros del 0 al 9
	//let regExpTelefono = /^\d{4}-\d{4}$/; //verificar nums de telefono
	//let regExpUrl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //verificar url
	let regExpEmail = /^\S+@\S+$/; //verificar email
	let regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //contrasena 8 digitos minimo, 1 mayuscula, 1 minuscula, 1 caracter especial, 1 numero.
	//let regExpYear = /(?:(?:18|20)[0-9]{2})/; //verificar anio entre 1800 y 2099


	if(inputNombreComercial.value == ''){
		bError = true;
	};
	
	if(inputCedulaJuridica.value == '' || regExpNumeros.test(inputCedulaJuridica.value) == false){
		bError = true;
	};

	if(inputTelefonoCtro.value == '' || regExpNumeros.test(inputTelefonoCtro.value) == false){
		bError = true;
	};
	
	if(inputEmailInstit.value == '' || regExpEmail.test(inputEmailInstit.value) == false){
		bError = true;
	};

	if( inputPassword.value == '' || regExpPassword.test(inputPassword.value) == false){
		bError = true;
	}
	//validar confirmacion de contrasenia
	if(inputPasswordConf.value != inputPassword.value){
		bError = true;
	};
	if(inputAnoFund.value == '' || regExpNumeros.test(inputAnoFund.value) == false){
		bError = true;
	};

	//aqui van los de provincia, canton, distrito que son de seleccion.

	if(inputDireccionExacta.value == ''){
		bError = true;
	};

	//datos encargado
	if(inputNombre.value == ''){
		bError = true;
	};

	if(inputApellido.value == ''){
		bError = true;
	};

	/*if(inputTipoID.value == ''){
		bError = true;
	};*/

	if(inputIDnumber.value == '' || regExpNumeros.test(inputIDnumber.value) == false){
		bError = true;
	};

	if(inputTelefono.value == '' || regExpNumeros.test(inputTelefono.value) == false){
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
    registrar_usuario(tipo, nombrecomercial, cedulajuridica, tipodecentro, telefonoctro, fax, sitioweb, facebook, emailinstit, 
                      direccionexacta, anofund, refhist, departamento, ext, escudo, foto, bilingue, tecnico, 
                      religioso, noreligioso, vocacional, idiomas, becas, bachilleratoint, mixto, varones, mujeres, primaria, 
                      secundaria, telefono, cantidaddehijos, anodenacimiento, tipoidentificacion, identificacion, nombre, 
                      segundonombre, apellido, segundoapellido, nacionalidad, fechanacimiento, provincia, canton, distrito, 
                      correo, contrasenna, confirmarcontrasenna, rankingmep, califnum, rankingpadres, califanno, 
                      codigoverif, codigoautenticar, estado
);

    lista_centros = obtener_lista_usuarios();

	}
    mostrar_lista_centros(); 
	 
 };


botonRegistrar.addEventListener('click', obtenerDatos);



function mostrar_lista_centros(){
	let tbody = document.querySelector('#tblCentrosEducativos tbody');
	tbody.innerHTML = ''; 

	for(let i = 0; i < lista_centros.length; i++){
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

        //



		celdaTipo.innerHTML = lista_centros[i]['tipo'];
        celdaNombrecomercial.innerHTML = lista_centros[i]['nombrecomercial'];
        celdaCedulajuridica.innerHTML = lista_centros[i]['cedulajuridica'];
        celdaTipodecentro.innerHTML = lista_centros[i]['tipodecentro'];
        celdaTelefonoctro.innerHTML = lista_centros[i]['telefonoctro'];
        celdaFax.innerHTML = lista_centros[i]['fax'];
        celdaSitioweb.innerHTML = lista_centros[i]['sitioweb'];
        celdaFacebook.innerHTML = lista_centros[i]['facebook'];
        celdaEmailinstit.innerHTML = lista_centros[i]['emailinstit'];
        celdaDireccionexacta.innerHTML = lista_centros[i]['direccionexacta'];
        celdaAnofund.innerHTML = lista_centros[i]['anofund'];
        celdaRefhist.innerHTML = lista_centros[i]['refhist'];
        celdaDepartamento.innerHTML = lista_centros[i]['departamento'];
        celdaExt.innerHTML = lista_centros[i]['ext'];

		let imagen = document.createElement('img');
            imagen.classList.add('imagenTabla'); //para definir el tamano de la imagen

            if(lista_centros[i]['escudo']){
                imagen.src = lista_centros[i]['escudo'];
            }else{
                imagen.src = 'imgs/escudo.png';
            }

            celdaEscudo.appendChild(imagen);

        let foto = document.createElement('img');
            foto.classList.add('imagenTabla'); //para definir el tamano de la imagen

            if(lista_centros[i]['foto']){
                foto.src = lista_centros[i]['foto'];
            }else{
                foto.src = 'imgs/user.png';
            }

            celdaFoto.appendChild(foto);

        celdaBilingue.innerHTML = lista_centros[i]['bilingue'];
        celdaTecnico.innerHTML = lista_centros[i]['tecnico'];
        celdaReligioso.innerHTML = lista_centros[i]['religioso'];
        celdaNoreligioso.innerHTML = lista_centros[i]['noreligioso'];
        celdaVocacional.innerHTML = lista_centros[i]['vocacional'];
        celdaIdiomas.innerHTML = lista_centros[i]['idiomas'];
        celdaBecas.innerHTML = lista_centros[i]['becas'];
        celdaBachilleratoint.innerHTML = lista_centros[i]['bachilleratoint'];
        celdaMixto.innerHTML = lista_centros[i]['mixto'];
        celdaVarones.innerHTML = lista_centros[i]['varones'];
        celdaMujeres.innerHTML = lista_centros[i]['mujeres'];
        celdaPrimaria.innerHTML = lista_centros[i]['primaria'];
        celdaSecundaria.innerHTML = lista_centros[i]['secundaria'];
        celdaTelefono.innerHTML = lista_centros[i]['telefono'];
        celdaCantidaddehijos.innerHTML = lista_centros[i]['cantidaddehijos'];
        celdaAnodenacimiento.innerHTML = lista_centros[i]['anodenacimiento'];
        celdaTipoidentificacion.innerHTML = lista_centros[i]['tipoidentificacion'];
        celdaIdentificacion.innerHTML = lista_centros[i]['identificacion'];
        celdaNombre.innerHTML = lista_centros[i]['nombre'];
        celdaSegundonombre.innerHTML = lista_centros[i]['segundonombre'];
        celdaApellido.innerHTML = lista_centros[i]['apellido'];
        celdaSegundoapellido.innerHTML = lista_centros[i]['segundoapellido'];
        celdaNacionalidad.innerHTML = lista_centros[i]['nacionalidad'];
        celdaFechanacimiento.innerHTML = lista_centros[i]['fechanacimiento'];
        celdaProvincia.innerHTML = lista_centros[i]['provincia'];
        celdaCanton.innerHTML = lista_centros[i]['canton'];
        celdaDistrito.innerHTML = lista_centros[i]['distrito'];
        celdaCorreo.innerHTML = lista_centros[i]['correo'];
        celdaContrasenna.innerHTML = lista_centros[i]['contrasenna'];
        celdaConfirmarcontrasenna.innerHTML = lista_centros[i]['confirmarcontrasenna'];
  }

	};
