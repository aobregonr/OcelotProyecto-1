'use strict';

//recibir datos dinámicos del admin
let nombre_usuario=sessionStorage.getItem('nombre_usuario');
let apellido_usuario=sessionStorage.getItem('apellido_usuario');
let foto_usuario=sessionStorage.getItem('foto_usuario');
//

let img=document.querySelector('#fotoAdmin');
img.setAttribute("src", foto_usuario);
let h2Nombre= document.querySelector('#username');
h2Nombre.innerHTML=nombre_usuario+" "+apellido_usuario;

//---------------------------------------------------------//

let lista_centros = obtener_lista_usuarios(); //obtener centros educ
let lista_ranking = obtener_rankingMEP(); //obtener centros educativos rankeados por admin

obtener_ranking();
mostrar_rankingMep();

aprobar_centrosEducativos();

//esta funcion es para pasar de pendiente a aprobado.
//estos son los valores que pide la funcion del backend por defecto. 



function aprobar_centrosEducativos(){
	let tbody = document.querySelector('#tablaAprobarCentros tbody');
	tbody.innerHTML = '';


	for(let i = 0; i < lista_centros.length; i++){
		let fila = tbody.insertRow();

		//solo muestra centros educativos pendientes de aprobacion.
		if (lista_centros[i]['tipo'] == 'CentroEducativo' && lista_centros[i]['estado'] == 'pendiente'){ 

	        let celdaNombrecomercial = fila.insertCell();
	        let celdaEscudo = fila.insertCell();
	        let celdaTipoCentro = fila.insertCell();
			let celdaAnoFund =fila.insertCell();
			let celdaEstado = fila.insertCell();
			let celdaHerramientas =fila.insertCell();

		//----------------------------------------------------------------------------------------//

	        celdaNombrecomercial.innerHTML = lista_centros[i]['nombrecomercial'];

			let imagen = document.createElement('img');
	            imagen.classList.add('imagenTabla'); //para definir el tamano de la imagen

	            if(lista_centros[i]['escudo']){
	                imagen.src = lista_centros[i]['escudo'];
	            }else{
	                imagen.src = 'imgs/escudo.png';
	            }

	            celdaEscudo.appendChild(imagen);

            celdaTipoCentro.innerHTML = lista_centros[i]['tipodecentro'];
            celdaAnoFund.innerHTML = lista_centros[i]['anofund'];
            celdaEstado.innerHTML = lista_centros[i]['estado'];

            //boton activar centro

            let botonActivar = document.createElement('a');
            botonActivar.classList.add('fas');
            botonActivar.classList.add('fa-check-circle');
            botonActivar.classList.add('check'); //es para hacer hover a otro color
            botonActivar.classList.add('aprovIcon'); //es para dar espacio

            //dataset (propiedad q permite definir atributos personalizados para un elemento de html)
            botonActivar.dataset._id = lista_centros[i]['_id'];

            //boton rechazar centro
            let botonEliminarCentro = document.createElement('a');
            botonEliminarCentro.classList.add('fas');
            botonEliminarCentro.classList.add('fa-trash-alt');
            botonEliminarCentro.classList.add('trash'); //es para hacer hover a otro color
            botonEliminarCentro.classList.add('rejectIcon'); //es para dar espacio

            //dataset (propiedad q permite definir atributos personalizados para un elemento de html)
            botonEliminarCentro.dataset._id = lista_centros[i]['_id'];

            //insertar los botones dinamicamente 
            celdaHerramientas.appendChild(botonActivar);
            celdaHerramientas.appendChild(botonEliminarCentro);

            //agregar las funciones a los botones
            botonActivar.addEventListener('click', activarCentroPendiente);

		}
	}
};

function obtener_ranking(){

	let tbody = document.querySelector('#tablaCalif tbody');
	tbody.innerHTML = ''; 

	for(let i = 0; i < lista_centros.length; i++){
		let fila = tbody.insertRow();

		if (lista_centros[i]['tipo'] == 'CentroEducativo' && lista_centros[i]['califnum'] == 0){ //solo muestra centros educativos

	        let celdaNombrecomercial = fila.insertCell();
	        let celdaEscudo = fila.insertCell();
	        let celdaInfraestructura = fila.insertCell();
			let celdaEquipo = fila.insertCell();
			let celdaAdministrativo =fila.insertCell();
			let celdaDocente = fila.insertCell();
			let celdaActividades =fila.insertCell();
			let celdaEstudio = fila.insertCell();
			let celdaExperiencia= fila.insertCell();
			let celdaComedor = fila.insertCell();
			let celdaEnfermeria = fila.insertCell();
			let celdaEmergencia = fila.insertCell();
			let celdaRankingMEP = fila.insertCell();
			let celdaCalifNum = fila.insertCell();
			celdaCalifNum.setAttribute("id", lista_centros[i]['_id'] + '_califNum'); //tiene un id para que se pueda llamar en la funcion de ranking
			//let celdaCalifanno = fila.insertCell();
			let celdaOpciones = fila.insertCell();

	//----------------------------------------------------------------------------------------//

	        celdaNombrecomercial.innerHTML = lista_centros[i]['nombrecomercial'];

			let imagen = document.createElement('img');
	            imagen.classList.add('imagenTabla'); //para definir el tamano de la imagen

	            if(lista_centros[i]['escudo']){
	                imagen.src = lista_centros[i]['escudo'];
	            }else{
	                imagen.src = 'imgs/escudo.png';
	            }

	            celdaEscudo.appendChild(imagen);

	//----------------------------------------------------------------------------------------//

		 	let celdasCalif = [celdaInfraestructura, celdaEquipo, celdaAdministrativo, celdaDocente, celdaActividades, 
	 				    	   celdaEstudio, celdaExperiencia, celdaComedor, celdaEnfermeria, celdaEmergencia];

	   		for(let n=0; n< celdasCalif.length; n++){

				//Crear un array de numeros de calificacion
				var numeros = ["1","2","3","4","5","6","7","8","9","10"];

				//Insertar el un select en las celdas de calificacion.
				var selectList = document.createElement("select");
				selectList.classList.add('rubroscalif');
				selectList.setAttribute("id", lista_centros[i]['_id'] + n);
				celdasCalif[n].appendChild(selectList);


				//Meter el array como opciones en el select.
				for (var j = 0; j < numeros.length; j++) {
				    var option = document.createElement("option");
				    option.setAttribute("value", numeros[j]);
				    option.text = numeros[j];
				    selectList.appendChild(option);
				}
			};

	//----------------------------------------------------------------------------------------//

			//generar estrellas para ranking (grises)
			let stars = "";

			if (lista_centros[i]['rankingmep'] == 5){

				for(let s = 1; s<6; s++ ) {

					stars += "<i id='star" + s + '_' + lista_centros[i]['_id'] + "' class='fas fa-star fa-1x'>"; //generar estrellas grises
				};

				celdaRankingMEP.innerHTML = stars; //llenar la celda con estrellas

			};

	//----------------------------------------------------------------------------------------//
	/*
			//Crear un array de anios de calificacion
			var annos = ["2019","2018","2017"];

			//Insertar el un select en las celdas de calificacion.
			var selectList = document.createElement("select");
			selectList.setAttribute("id", "mySelectAnno");
			celdaCalifanno.appendChild(selectList);
		
			//Meter el array como opciones en el select.
			for (var k = 0; k < annos.length; k++) {
			    var option = document.createElement("option");
			    option.setAttribute("value", annos[k]);
			    option.text = annos[k];
			    selectList.appendChild(option);
		  	};

	  		//obtener el valor del annio de cada celda
			let indexCalifanno = document.getElementById("mySelectAnno").selectedIndex; //obtener el index del select, en la casilla especifica de infraestructura
	  		let califAnnoV = Number(celdaCalifanno.getElementsByTagName("option")[indexCalifanno].value); //obtener el value de ese index (como numero entero).
		  */		
	  		let califAnnoV = '2019';
	//----------------------------------------------------------------------------------------//

			 //boton ver calificacion y ranking
            let botonVerRanking = document.createElement('a');
            botonVerRanking.classList.add('fas');
            botonVerRanking.classList.add('fa-eye');

            //boton registrar calificacion y ranking
            let botonEnviarRanking = document.createElement('a');
            botonEnviarRanking.classList.add('fas');
            botonEnviarRanking.classList.add('fa-check-circle');
            botonEnviarRanking.classList.add('check');

            //dataset (propiedad q permite definir atributos personalizados para un elemento de html)
            botonVerRanking.dataset._id = lista_centros[i]['_id'];
            botonEnviarRanking.dataset._id = lista_centros[i]['_id'];

            //insertar los botones dinamicamente 
            celdaOpciones.appendChild(botonVerRanking);
            celdaOpciones.appendChild(botonEnviarRanking);

            //agregar las funciones a los botones
            botonVerRanking.addEventListener('click', rankingStars); //define la cantidad de estrellas y la calif
            botonEnviarRanking.addEventListener('click', registrar_ranking); //guarda la info de ranking y nota en una tabla. 


            let califActual = lista_centros[i]['califnum'];

            function registrar_ranking(){

            	let id = this.dataset._id;

				let nombrecomercial = celdaNombrecomercial.innerHTML;
				let escudo = celdaEscudo.innerHTML;
				let rankingmep = celdaRankingMEP.innerHTML;
				let califnum = celdaCalifNum.innerHTML;
				let califanno = califAnnoV;


				
				let califNueva = califnum;
				califActual = califNueva;

				console.log(califActual)


				let bError = false;


				if(califnum.value == ''){
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
				    text: 'No se pudo registrar ranking, por favor presione el boton de ver ranking.',
				    type: 'warning',
				  });

				}else{

					//registrar el ranking en base de datos exclusiva
					registro_rankingMEP(nombrecomercial, escudo, rankingmep, califnum, califanno);

					//modificar el estatus de la nota del cole en la base de datos completa
					modificar_califNumerica(id, califActual);

					//reload de la tabla para esconder el ya registrado
					lista_centros = obtener_lista_usuarios();
					obtener_ranking();

					//reload de la tabla con rankings (va a estar oculta peeeeero...)
					mostrar_rankingMep();

				};

				};

		};
	};
};


function rankingStars(){

		let id = this.dataset._id;

		//obtener el valor numerico de cada celda... que HP mierda mas dificil...

		let indexinfra = document.getElementById(id+ "0"); //id de casilla infraestructura
		let infraestructura = Number(indexinfra.options[indexinfra.selectedIndex].text); //obtener el value de ese index (como numero entero).
		

		let indexequipo = document.getElementById(id+ "1");
		let equipo = Number(indexequipo.options[indexequipo.selectedIndex].text);
		
		let indexadministrativo = document.getElementById(id+ "2");
		let administrativo = Number(indexadministrativo.options[indexadministrativo.selectedIndex].text);

		let indexdocente = document.getElementById(id+ "3");
		let docente	= Number(indexdocente.options[indexdocente.selectedIndex].text);

		let indexactividades = document.getElementById(id+ "4");
		let actividades	= Number(indexactividades.options[indexactividades.selectedIndex].text);

		let indexestudio = document.getElementById(id+ "5");
		let estudio	= Number(indexestudio.options[indexestudio.selectedIndex].text);

		let indexexperiencia = document.getElementById(id+ "6");
		let experiencia	= Number(indexexperiencia.options[indexexperiencia.selectedIndex].text);

		let indexcomedor = document.getElementById(id+ "7");
		let comedor	= Number(indexcomedor.options[indexcomedor.selectedIndex].text);

		let indexenfermeria = document.getElementById(id+ "8");
		let enfermeria = Number(indexenfermeria.options[indexenfermeria.selectedIndex].text);

		let indexemergencia = document.getElementById(id+ "9");
		let emergencia = Number(indexemergencia.options[indexemergencia.selectedIndex].text);


		//obtener la nota total numerica de la rubrica.
		let notaTotal = ( infraestructura + equipo + administrativo + docente + actividades +
						  estudio + experiencia + comedor + enfermeria + emergencia); 

		//se divide entre 10 para tener el valor del 1 al 10 de nota y posteriormente del 1 al 5 estrellas.
		//let notaPromedio = notaTotal / 10; 

		//se divide entre 2 para sacar la cantidad de estrellas
		//let rankingNumber = Math.trunc(notaPromedio / 2); 

		//obtener las estrellas
		const estrella1 =  document.getElementById("star1_" + id); 
		const estrella2 =  document.getElementById("star2_" + id); 
		const estrella3 =  document.getElementById("star3_" + id); 
		const estrella4 =  document.getElementById("star4_" + id); 
		const estrella5 =  document.getElementById("star5_" + id); 

		//hacer una lista de las estrellas
		let estrellas = [estrella1, estrella2, estrella3, estrella4, estrella5];


		//loopear entre ellas para asignarles color
		for(let i = 0; i < estrellas.length; i++){


			if (notaTotal >= 0 && notaTotal <= 35){   
				estrellas[0].style.color = "orange"; 
			}
			else if (notaTotal >= 36 && notaTotal <= 55){  
				estrellas[0].style.color = "orange"; 
				estrellas[1].style.color = "orange"; 
			}
			else if (notaTotal >= 56 && notaTotal <= 75){  
				estrellas[0].style.color = "orange"; 
				estrellas[1].style.color = "orange"; 
				estrellas[2].style.color = "orange"; 
			}
			else if (notaTotal >= 76 && notaTotal <= 89){  
				estrellas[0].style.color = "orange"; 
				estrellas[1].style.color = "orange"; 
				estrellas[2].style.color = "orange"; 
				estrellas[3].style.color = "orange"; 
			}
			else if (notaTotal >= 90 && notaTotal <= 100){  
				estrellas[0].style.color = "orange"; 
				estrellas[1].style.color = "orange"; 
				estrellas[2].style.color = "orange"; 
				estrellas[3].style.color = "orange";
				estrellas[4].style.color = "orange"; 
			}
		};

		//let newRanking = celdaRankingMEP.innerHTML; //guardar el dato de estrellas con ranking.

		let celdaCalif = document.getElementById(id + '_califNum');
		celdaCalif.innerHTML = notaTotal;
			
	};




//esta tiene que estar oculta

function mostrar_rankingMep(){
	let tbody = document.querySelector('#tblRankingMEP tbody');
	let lista_rankingMep = obtener_rankingMEP();
	tbody.innerHTML = ''; 

	for(let i = 0; i < lista_rankingMep.length; i++){
		let fila = tbody.insertRow();

		let celdaNombrecomercial = fila.insertCell();
        let celdaEscudo = fila.insertCell();
        let celdaRankingmep = fila.insertCell(); 
        let celdaCalifnum = fila.insertCell(); 
        //let celdaCalifanno = fila.insertCell(); 
   
        //

        celdaNombrecomercial.innerHTML = lista_rankingMep[i]['nombrecomercial'];
        celdaEscudo.innerHTML =lista_rankingMep[i]['escudo'];
        celdaRankingmep.innerHTML = lista_rankingMep[i]['rankingmep'];
      	celdaCalifnum.innerHTML = lista_rankingMep[i]['califnum'];
      	//celdaCalifanno.innerHTML = lista_rankingMep[i]['califanno'];

	};

};

function activarCentroPendiente(){
		//binding epico increible!! <3  (this)
		//sirve para enlazar la funcion con el contexto que la llama. 
		let id = this.dataset._id;
		let usuario = obtener_usuario_por_id(id);
		let estado = usuario.estado;

		estado = 'activo'; //hacer que el estado ahora sea activo.


		console.log(id, estado);
		activar_centro(id,  estado);

		//dar un mensaje de confirmacion
		 swal.fire({
        	type : 'info',
            buttonsStyling: false,
			customClass: {
			title: 'title-class',
			confirmButton: 'confirm-button-class'},
            text: 'El centro educativo ha sido aprobado con éxito.',
          });

		//refresca la tabla... hay q probar esto
		lista_centros = obtener_lista_usuarios();
		aprobar_centrosEducativos();

	};



		