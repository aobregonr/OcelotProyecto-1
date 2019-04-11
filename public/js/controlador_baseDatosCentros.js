
//filtrar
const inputFiltro = document.querySelector('#txtFiltro');
const botonRegistrar = document.querySelector('#btn_registrar');

//Estos son los inputs del centro educativo.
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


//----------------------------------------------------------//

let lista_centros = obtener_lista_centros();

mostrar_lista_centros(); 

//botonRegistrar.addEventListener('click', obtenerDatos);
inputFiltro.addEventListener('keyup', mostrar_lista_centros);

//----------------------------------------------------------//



function mostrar_lista_centros(){

	let tbody = document.querySelector('#tblCentrosEducativos tbody');
	let filtro = inputFiltro.value;
	
	tbody.innerHTML = ''; 

	for(let i = 0; i < lista_centros.length; i++){

		if(lista_centros[i]['nombreComercial'].toLowerCase().includes(filtro.toLowerCase())){

			let fila = tbody.insertRow();

			let celdaNombreComercial = fila.insertCell();
			let celdaCedulaJuridica = fila.insertCell();
			let celdaTipodeCentro = fila.insertCell();
			let celdaTelefonoCtro = fila.insertCell();
			let celdaFax = fila.insertCell();
			let celdaSitioWeb = fila.insertCell();
			let celdaFacebook = fila.insertCell();
			let celdaEmailInstit = fila.insertCell();
			let celdaPassword = fila.insertCell();
			let celdaPasswordConf = fila.insertCell();
			let celdaAnoFund = fila.insertCell();
			let celdaRefHist = fila.insertCell();
			let celdaProvincia = fila.insertCell();
			let celdaCanton= fila.insertCell();
			let celdaDistrito= fila.insertCell();
			let celdaDireccionExacta= fila.insertCell();
			//
			let celdaNombre = fila.insertCell();
			let celdaNombre2 = fila.insertCell();
			let celdaApellido = fila.insertCell();
			let celdaApellido2 = fila.insertCell();
			let celdatipoID = fila.insertCell();
			let celdaIDnumber = fila.insertCell();
			let celdaEmail = fila.insertCell();
			let celdaDepartamento = fila.insertCell();
			let celdaTelefono = fila.insertCell();
			let celdaExt = fila.insertCell();
			let celdaEscudo = fila.insertCell();
			let celdaFoto = fila.insertCell();
			//
			let celdaBilingue = fila.insertCell();
			let celdaTecnico = fila.insertCell();
			let celdaReligioso = fila.insertCell();
			let celdaNoReligioso = fila.insertCell();
			let celdaVocacional = fila.insertCell();
			let celdaIdiomas = fila.insertCell();
			let celdaBecas = fila.insertCell();
			let celdaBachilleratoInt = fila.insertCell();
			let celdaMixto = fila.insertCell();
			let celdaVarones= fila.insertCell();
			let celdaMujeres = fila.insertCell();
			let celdaPrimaria = fila.insertCell();
			let celdaSecundaria = fila.insertCell();



			celdaNombreComercial.innerHTML = lista_centros[i]['nombreComercial'];
			celdaCedulaJuridica.innerHTML = lista_centros[i]['cedulaJuridica'];
			celdaTipodeCentro.innerHTML = lista_centros[i]['tipoDeCentro'];
			celdaTelefonoCtro.innerHTML = lista_centros[i]['telefonoCtro'];
			celdaFax.innerHTML = lista_centros[i]['fax'];
			celdaSitioWeb.innerHTML = lista_centros[i]['sitioWeb'];
			celdaFacebook.innerHTML = lista_centros[i]['facebook'];
			celdaEmailInstit.innerHTML = lista_centros[i]['emailInstit'];
			celdaPassword.innerHTML = lista_centros[i]['password'];
			celdaPasswordConf.innerHTML = lista_centros[i]['passwordConf'];
			celdaAnoFund.innerHTML = lista_centros[i]['anoFund'];
			celdaRefHist.innerHTML = lista_centros[i]['refHist'];
			celdaProvincia.innerHTML = lista_centros[i]['provincia'];
			celdaCanton.innerHTML = lista_centros[i]['canton'];
			celdaDistrito.innerHTML = lista_centros[i]['distrito'];
			celdaDireccionExacta.innerHTML = lista_centros[i]['direccionExacta'];
			celdaNombre.innerHTML = lista_centros[i]['nombre'];
			celdaNombre2.innerHTML = lista_centros[i]['nombre2'];
			celdaApellido.innerHTML = lista_centros[i]['apellido'];
			celdaApellido2.innerHTML = lista_centros[i]['apellido2'];
			celdatipoID.innerHTML = lista_centros[i]['tipoID'];
			celdaIDnumber.innerHTML = lista_centros[i]['IDnumber'];
			celdaEmail.innerHTML = lista_centros[i]['email'];
			celdaDepartamento.innerHTML = lista_centros[i]['departamento'];
			celdaTelefono.innerHTML = lista_centros[i]['telefono'];
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
	      

	        //checkboxes
			celdaBilingue.innerHTML = lista_centros[i]['bilingue'];
			celdaTecnico.innerHTML = lista_centros[i]['tecnico'];
			celdaReligioso.innerHTML = lista_centros[i]['religioso'];
			celdaNoReligioso.innerHTML = lista_centros[i]['noReligioso'];
			celdaVocacional.innerHTML = lista_centros[i]['vocacional'];
			celdaIdiomas.innerHTML = lista_centros[i]['idiomas'];
			celdaBecas.innerHTML = lista_centros[i]['becas'];
			celdaBachilleratoInt.innerHTML = lista_centros[i]['bachilleratoInt'];
			celdaMixto.innerHTML = lista_centros[i]['mixto'];
			celdaVarones.innerHTML = lista_centros[i]['varones'];
			celdaMujeres.innerHTML = lista_centros[i]['mujeres'];
			celdaPrimaria.innerHTML = lista_centros[i]['primaria'];
			celdaSecundaria.innerHTML = lista_centros[i]['secundaria'];
  		}
	}

};
