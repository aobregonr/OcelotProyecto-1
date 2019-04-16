'use strict';
//filtrar
const inputFiltro = document.querySelector('#txtFiltro');
const botonRegistrar = document.querySelector('#btn_registrar');




//----------------------------------------------------------//

let lista_usuarios = obtener_lista_usuarios();

mostrar_lista_usuarios(); 

inputFiltro.addEventListener('keyup', mostrar_lista_usuarios);

//----------------------------------------------------------//



function mostrar_lista_usuarios(){

	let tbody = document.querySelector('#tblUsuarios tbody');
    tbody.innerHTML = '';  //asegura que la tabla está vacía antes de imprimir y evtita duplicados
    let filtro = inputFiltro.value;

	
	tbody.innerHTML = ''; 

	for(let i = 0; i < lista_usuarios.length; i++){

		if(lista_usuarios[i]['tipo'].toLowerCase().includes(filtro.toLowerCase())  ||
        lista_usuarios[i]['nombrecomercial'].toLowerCase().includes(filtro.toLowerCase()) ||
        lista_usuarios[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) ){

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


        celdaTipo.innerHTML = lista_usuarios[i]['tipo'];
        celdaNombrecomercial.innerHTML = lista_usuarios[i]['nombrecomercial'];
        celdaCedulajuridica.innerHTML = lista_usuarios[i]['cedulajuridica'];
        celdaTipodecentro.innerHTML = lista_usuarios[i]['tipodecentro'];
        celdaTelefonoctro.innerHTML = lista_usuarios[i]['telefonoctro'];
        celdaFax.innerHTML = lista_usuarios[i]['fax'];
        celdaSitioweb.innerHTML = lista_usuarios[i]['sitioweb'];
        celdaFacebook.innerHTML = lista_usuarios[i]['facebook'];
        celdaEmailinstit.innerHTML = lista_usuarios[i]['emailinstit'];
        celdaDireccionexacta.innerHTML = lista_usuarios[i]['direccionexacta'];
        celdaAnofund.innerHTML = lista_usuarios[i]['anofund'];
        celdaRefhist.innerHTML = lista_usuarios[i]['refhist'];
        celdaDepartamento.innerHTML = lista_usuarios[i]['departamento'];
        celdaExt.innerHTML = lista_usuarios[i]['ext'];
        let imagen = document.createElement('img');
            imagen.classList.add('imagenTabla'); //para definir el tamano de la imagen

            if(lista_usuarios[i]['escudo']){
                imagen.src = lista_usuarios[i]['escudo'];
            }else{
                imagen.src = 'imgs/escudo.png';
            }

            celdaEscudo.appendChild(imagen);

        let foto = document.createElement('img');
            foto.classList.add('imagenTabla'); //para definir el tamano de la imagen

            if(lista_usuarios[i]['foto']){
                foto.src = lista_usuarios[i]['foto'];
            }else{
                foto.src = 'imgs/user.png';
            }

            celdaFoto.appendChild(foto);
        celdaBilingue.innerHTML = lista_usuarios[i]['bilingue'];
        celdaTecnico.innerHTML = lista_usuarios[i]['tecnico'];
        celdaReligioso.innerHTML = lista_usuarios[i]['religioso'];
        celdaNoreligioso.innerHTML = lista_usuarios[i]['noreligioso'];
        celdaVocacional.innerHTML = lista_usuarios[i]['vocacional'];
        celdaIdiomas.innerHTML = lista_usuarios[i]['idiomas'];
        celdaBecas.innerHTML = lista_usuarios[i]['becas'];
        celdaBachilleratoint.innerHTML = lista_usuarios[i]['bachilleratoint'];
        celdaMixto.innerHTML = lista_usuarios[i]['mixto'];
        celdaVarones.innerHTML = lista_usuarios[i]['varones'];
        celdaMujeres.innerHTML = lista_usuarios[i]['mujeres'];
        celdaPrimaria.innerHTML = lista_usuarios[i]['primaria'];
        celdaSecundaria.innerHTML = lista_usuarios[i]['secundaria'];
        celdaTelefono.innerHTML = lista_usuarios[i]['telefono'];
        celdaCantidaddehijos.innerHTML = lista_usuarios[i]['cantidaddehijos'];
        celdaAnodenacimiento.innerHTML = lista_usuarios[i]['anodenacimiento'];
        celdaTipoidentificacion.innerHTML = lista_usuarios[i]['tipoidentificacion'];
        celdaIdentificacion.innerHTML = lista_usuarios[i]['identificacion'];
        celdaNombre.innerHTML = lista_usuarios[i]['nombre'];
        celdaSegundonombre.innerHTML = lista_usuarios[i]['segundonombre'];
        celdaApellido.innerHTML = lista_usuarios[i]['apellido'];
        celdaSegundoapellido.innerHTML = lista_usuarios[i]['segundoapellido'];
        celdaNacionalidad.innerHTML = lista_usuarios[i]['nacionalidad'];
        celdaFechanacimiento.innerHTML = lista_usuarios[i]['fechanacimiento'];
        celdaProvincia.innerHTML = lista_usuarios[i]['provincia'];
        celdaCanton.innerHTML = lista_usuarios[i]['canton'];
        celdaDistrito.innerHTML = lista_usuarios[i]['distrito'];
        celdaCorreo.innerHTML = lista_usuarios[i]['correo'];
        celdaContrasenna.innerHTML = lista_usuarios[i]['contrasenna'];
        celdaConfirmarcontrasenna.innerHTML = lista_usuarios[i]['confirmarcontrasenna'];

    	}
	}

};
