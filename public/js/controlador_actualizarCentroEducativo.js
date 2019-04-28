'use strict';



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
//NUEVOS EXCLUSIVOS DE ACTUALIZAR
const inputCalifnum =0;
const inputCodigoverif=0;
const inputCodigoautenticar='';
const inputEstado='';



//obtener el id del URL (con el parametro que viene de la base de datos)
let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);//Toma el parámetro id del url y retorna el valor
    return id;
};


let _id = get_param('id_usuario'); 

let user= obtener_usuario_por_id(_id) //obtener toda la info del usuario actual

let mostrardatos = () =>{
	inputTipo.value = user.tipo;
	inputNombreComercial.value = user.nombrecomercial;
	inputCedulaJuridica.value = user.cedulajuridica;

	let tipo_de_centro = document.querySelectorAll('#txtTipoCentroEducat option')

	for(let i=0; i < tipo_de_centro.length; i++){
		if (tipo_de_centro[i].textContent == user.tipodecentro){
			tipo_de_centro.selected = true;
			inputTipoDeCentro.value=tipo_de_centro[i].value
			console.log(tipo_de_centro[i].value)
			}
	}

	inputTelefonoCtro.value = user.telefonoctro;
	inputFax.value = user.fax;
	inputSitioWeb.value = user.sitioweb;
	inputFacebook.value  = user.facebook;
	inputEmailInstit.value  = user.emailinstit;
	inputPassword.value  = user.contrasenna;
	inputPasswordConf.value  = user.confirmarcontrasenna;
	inputAnoFund.value  = user.anofund;
	inputHisRef.value  = user.refhist;

	let opciones_provincias = document.querySelectorAll('#txtProvincia option')

	for(let i=0; i < opciones_provincias.length; i++){
		if (opciones_provincias[i].textContent == user.provincia){
			opciones_provincias.selected = true;
			inputProvincia.value=opciones_provincias[i].value
			llenar_cantones();
			}
	}

	let opciones_cantones = document.querySelectorAll('#txtCanton option')

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


	inputDireccionExacta.value = user.direccionexacta;
	inputNombre.value = user.nombre; 
	inputNombre2.value = user.segundonombre;
	inputApellido.value = user.apellido;
	inputApellido2.value = user.segundoapellido;

	let tipo_id = document.querySelectorAll('#txtTipoCentroEducat option')

	for(let i=0; i < tipo_id.length; i++){
		if (tipo_id[i].textContent == user.tipoidentificacion){
			tipo_id.selected = true;
			inputTipoID.value=tipo_id[i].value
			console.log(tipo_id[i].value)
			}
	}

	inputIDnumber.value = user.identificacion;
	inputEmail.value = user.correo;
	inputDepartamento.value = user.departamento;
	inputTelefono.value = user.telefono;
	inputExt.value= user.ext;
	imgEscudo.value = user.imgEscudo;
	imgFoto.value = user.foto;

	inputBilingue.checked = user.bilingue;
	inputTecnico.checked = user.tecnico;
	inputReligioso.checked = user.religioso;
	inputNoReligioso.checked = user.noreligioso;
	inputVocacional.checked = user.vocacional;
	inputIdiomas.checked = user.idiomas;
	inputBecas.checked = user.becas;
	inputBachilleratoInt.checked = user.bachilleratoint;
	inputMixto.checked = user.mixto;
	inputVarones.checked = user.varones;
	inputMujeres.checked = user.mujeres;
	inputPrimaria.checked = user.primaria;
	inputSecundaria.checked = user.secundaria;

	//NUEVOS
	inputCalifnum.value = user.califnum
	inputCodigoverif.value = user.codigoverif
	inputCodigoautenticar.value = user.codigoautenticar
	inputEstado.value = user.estado
};


//si el usuario existe, retornar datos en el formulario
if(user){
	mostrardatos();
	console.log(mostrardatos());

};

let obtener_datos = () => {

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
    let califnum = inputCalifnum.value;
    let rankingpadres = 5;
    let califanno = 2019;
    let codigoverif = inputCodigoverif.value;
    let codigoautenticar = inputCodigoautenticar.value;
    let estado = inputEstado.value ;



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
    actualizar_usuario(tipo, nombrecomercial, cedulajuridica, tipodecentro, telefonoctro, fax, sitioweb, facebook, emailinstit, 
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


btn_registrar.addEventListener('click', obtener_datos);
