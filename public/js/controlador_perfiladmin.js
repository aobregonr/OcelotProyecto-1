'use strict';


//valores del 1 al 10 en rubrica del MEP

var options = "";
for(var i = 1; i<11; i++ ) {
    options += "<option value="+i+">"+i+"</option>";
};


//Asignar valores a la tabla.
document.getElementById('infraestructuraSelect').innerHTML = options;
document.getElementById('equipoSelect').innerHTML = options;
document.getElementById('administrativosSelect').innerHTML = options;
document.getElementById('docentesSelect').innerHTML = options;
document.getElementById('actividadesSelect').innerHTML = options;
document.getElementById('planEstudioSelect').innerHTML = options;
document.getElementById('experienciaSelect').innerHTML = options;
document.getElementById('comedorSelect').innerHTML = options;
document.getElementById('enfermeriaSelect').innerHTML = options;
document.getElementById('emergenciaSelect').innerHTML = options;

function rankingStars(){


	//obtener el valor numerico de lo que ingresa el admin en cada criterio
	let infraestructura = Number( document.getElementById('infraestructuraSelect').value);
	let equipo = Number(document.getElementById('equipoSelect').value);
	let administrativo = Number( document.getElementById('administrativosSelect').value);
	let docente	= Number(document.getElementById('docentesSelect').value);
	let actividades	= Number(document.getElementById('actividadesSelect').value);
	let estudio	= Number(document.getElementById('planEstudioSelect').value);
	let experiencia	= Number(document.getElementById('experienciaSelect').value);
	let comedor	= Number(document.getElementById('comedorSelect').value);
	let enfermeria = Number(document.getElementById('enfermeriaSelect').value);
	let emergencia = Number(document.getElementById('emergenciaSelect').value);


	//obtener la nota total numerica (va en la base de datos del home)
	let notaTotal = ( infraestructura + equipo + administrativo + docente + actividades +
					  estudio + experiencia + comedor + enfermeria + emergencia); 

	//se divide entre 10 para tener el valor del 1 al 10 de nota y posteriormente del 1 al 5 estrellas.
	let notaPromedio = notaTotal / 10; 

	//se divide entre 2 para sacar la cantidad de estrellas
	let rankingNumber = Math.trunc(notaPromedio / 2); 

	//obtener las estrellas
	const estrella1 =  document.getElementById('radio1'); 
	const estrella2 =  document.getElementById('radio2'); 
	const estrella3 =  document.getElementById('radio3'); 
	const estrella4 =  document.getElementById('radio4'); 
	const estrella5 =  document.getElementById('radio5'); 

	//hacer una lista de las estrellas
	let estrellas = [estrella1, estrella2, estrella3, estrella4, estrella5];

	//loopear entre ellas para asignarles color
	for(let i = 0; i < estrellas.length; i++){


		if (i <= (rankingNumber - 1)){   // le puse -1 al ranking porque la cuenta de estrellas empieza desde 0, el ranking empieza en 1, entonces para compensar, le quito 1.
			estrellas[i].style.color = "orange"; 
		};
		if (rankingNumber == 0){   // si la calificacion es 0, la calificacion minima es 1 estrella.
			estrellas[0].style.color = "orange"; 
		};

	};


};

const botonRanking = document.querySelector('#verRanking');
botonRanking.addEventListener('click', rankingStars);


//asignar la nota numérica a la celda correspondiente


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


document.getElementById("tablaCalif").rows[1].cells[12].innerHTML = notaTotal; //esto hay q cambiarlo, porq debe funcionar con cualquier row, no solo con el primero. 
	