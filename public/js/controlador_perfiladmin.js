'use strict';

//recibir datos dinámicos del admin
let nombre_usuario=sessionStorage.getItem('nombre_usuario');
let apellido_usuario=sessionStorage.getItem('apellido_usuario');
let foto_usuario=sessionStorage.getItem('foto_usuario');
//
let id_usuario=sessionStorage.getItem('id_usuario');
let codigoverif=sessionStorage.getItem('id_codigoverif');
let codigoautenticar=sessionStorage.getItem('id_codigoautenticar');

let img=document.querySelector('#fotoAdmin');
img.setAttribute("src", foto_usuario);
let h2Nombre= document.querySelector('#username');
h2Nombre.innerHTML=nombre_usuario+" "+apellido_usuario;

console.log(id_usuario, codigoverif, codigoautenticar) //////ESTO AUN NO SIRVEEEEEE!
//---------------------------------------------------------//

let botonRanking = '';
let botonRegistrarRanking = '';
let botonAprobarCentro = ''

let lista_centros = obtener_lista_usuarios(); //obtener centros educ
let lista_ranking = obtener_rankingMEP(); //obtener centros educativos rankeados por admin

obtener_ranking();
mostrar_rankingMep();

aprobar_centrosEducativos();

//esta funcion es para pasar de pendiente a aprobado.
function activarPendientes(){

	codigoautenticar = 'activo';
	autenticar_codigo(id_usuario, codigoverif, codigoautenticar);

};

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
			celdaHerramientas.innerHTML = '<i id="aprobarCentro'+i+'" class="fas fa-check-circle check aprovIcon"></i><i id="rechazarCentro'+i+'"class="fas fa-trash-alt trash rejectIcon"></i>'


			//----------------------------------------------------------------------------------------//
			botonAprobarCentro = document.querySelector('#aprobarCentro'+i );
}
}

botonAprobarCentro.addEventListener('click', activarPendientes());
};

function obtener_ranking(){

	let tbody = document.querySelector('#tablaCalif tbody');
	tbody.innerHTML = ''; 



	for(let i = 0; i < lista_centros.length; i++){
		let fila = tbody.insertRow();

		if (lista_centros[i]['tipo'] == 'CentroEducativo'){ //solo muestra centros educativos

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
			let celdaCalifanno = fila.insertCell();
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
				selectList.setAttribute("id", "mySelect"+n);
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

				for(let i = 1; i<6; i++ ) {
					stars += "<i id='star" + i +"' class='fas fa-star fa-1x'>"; //generar estrellas grises
				};

				celdaRankingMEP.innerHTML = stars; //llenar la celda con estrellas
			};

	//----------------------------------------------------------------------------------------//
			//Crear un array de anios de calificacion
			var annos = ["2017","2018","2019"];

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
		  		
	//----------------------------------------------------------------------------------------//

			celdaOpciones.innerHTML = '<i id="verRanking'+i+'" class="fas fa-eye"></i><i id="enviarRanking'+i+'" class="fas fa-check-circle check"></i>'
			

			botonRanking = document.querySelector('#verRanking'+i); //se le pone la i para q agarre el ID de cada ojito en cada celda. 
			botonRegistrarRanking = document.querySelector('#enviarRanking'+(i-2)); //se le pone la i para q agarre el ID de cada check en cada celda. 


			function rankingStars(){

				//obtener el valor numerico de cada celda... que HP mierda mas dificil...

				let indexinfraestructura = document.getElementById("mySelect0").selectedIndex; //obtener el index del select, en la casilla especifica de infraestructura
				let infraestructura = Number(celdaInfraestructura.getElementsByTagName("option")[indexinfraestructura].value); //obtener el value de ese index (como numero entero).
				
				let indexequipo = document.getElementById("mySelect1").selectedIndex;
				let equipo = Number(celdaEquipo.getElementsByTagName("option")[indexequipo].value);
				
				let indexadministrativo = document.getElementById("mySelect2").selectedIndex;
				let administrativo = Number(celdaAdministrativo.getElementsByTagName("option")[indexadministrativo].value);

				let indexdocente = document.getElementById("mySelect3").selectedIndex;
				let docente	= Number(celdaDocente.getElementsByTagName("option")[indexdocente].value);

				let indexactividades = document.getElementById("mySelect4").selectedIndex;
				let actividades	= Number(celdaActividades.getElementsByTagName("option")[indexactividades].value);

				let indexestudio = document.getElementById("mySelect5").selectedIndex;
				let estudio	= Number(celdaEstudio.getElementsByTagName("option")[indexestudio].value);

				let indexexperiencia = document.getElementById("mySelect5").selectedIndex;
				let experiencia	= Number(celdaExperiencia.getElementsByTagName("option")[indexexperiencia].value);

				let indexcomedor = document.getElementById("mySelect7").selectedIndex;
				let comedor	= Number(celdaComedor.getElementsByTagName("option")[indexcomedor].value);

				let indexenfermeria = document.getElementById("mySelect8").selectedIndex;
				let enfermeria = Number(celdaEnfermeria.getElementsByTagName("option")[indexenfermeria].value);

				let indexemergencia = document.getElementById("mySelect9").selectedIndex;
				let emergencia = Number(celdaEmergencia.getElementsByTagName("option")[indexemergencia].value);


				//obtener la nota total numerica de la rubrica.
				let notaTotal = ( infraestructura + equipo + administrativo + docente + actividades +
								  estudio + experiencia + comedor + enfermeria + emergencia); 

				//se divide entre 10 para tener el valor del 1 al 10 de nota y posteriormente del 1 al 5 estrellas.
				let notaPromedio = notaTotal / 10; 

				//se divide entre 2 para sacar la cantidad de estrellas
				let rankingNumber = Math.trunc(notaPromedio / 2); 

				//obtener las estrellas
				const estrella1 =  document.getElementById('star1'); 
				const estrella2 =  document.getElementById('star2'); 
				const estrella3 =  document.getElementById('star3'); 
				const estrella4 =  document.getElementById('star4'); 
				const estrella5 =  document.getElementById('star5'); 

				//hacer una lista de las estrellas
				let estrellas = [estrella1, estrella2, estrella3, estrella4, estrella5];

				//loopear entre ellas para asignarles color
				for(let i = 0; i < estrellas.length; i++){


					if (i <= (rankingNumber - 1)){   // le puse -1 al ranking porque la cuenta de estrellas empieza desde 0, el ranking empieza en 1, entonces para compensar, le quito 1.
						estrellas[i].style.color = "orange"; 
					}
					if (rankingNumber == 0){   // si la calificacion es 0, la calificacion minima es 1 estrella.
						estrellas[0].style.color = "orange"; 
					}
				};

				let newRanking = celdaRankingMEP.innerHTML; //guardar el dato de estrellas con ranking.

				celdaCalifNum.innerHTML = notaTotal;

				return [newRanking, notaTotal];	
				console.log(botonRanking)		
			};

			botonRanking.addEventListener('click', rankingStars);
		//botonRegistrarRanking.addEventListener('click', registrar_ranking);	

};


};
};
	//----------------------------------------------------------------------------------------//
				



//REGISTRAR RANKING

function registrar_ranking(){

	let nombrecomercial = celdaNombrecomercial.innerHTML;
	let escudo = celdaEscudo.innerHTML;
	let rankingmep = rankingStars()[0];
	let califnum = rankingStars()[1];
	let califanno = califAnnoV;


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
	registro_rankingMEP(nombrecomercial, escudo, rankingmep, califnum, califanno)


	};
	return[nombrecomercial, escudo, rankingmep, califnum, califanno];
	console.log(registrar_ranking);

	};




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
        let celdaCalifanno = fila.insertCell(); 
   
        //

        celdaNombrecomercial.innerHTML = lista_rankingMep[i]['nombrecomercial'];
        celdaEscudo.innerHTML =lista_rankingMep[i]['escudo'];
        celdaRankingmep.innerHTML = lista_rankingMep[i]['rankingmep'];
      	celdaCalifnum.innerHTML = lista_rankingMep[i]['califnum'];
      	celdaCalifanno.innerHTML = lista_rankingMep[i]['califanno'];

	};

};


