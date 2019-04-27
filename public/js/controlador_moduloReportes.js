'use strict';


const inputFiltro = document.querySelector('#txtFiltro');

let lista_centros = obtener_lista_usuarios(); //obtener centros educ
let lista_ranking = obtener_rankingMEP(); //obtener centros educativos rankeados por admin
let calificaciones=[];
let centros = [];


mostrar_rankingMep();

inputFiltro.addEventListener('keyup', mostrar_rankingMep);

//esta tiene que estar oculta

function mostrar_rankingMep(){
	let tbody = document.querySelector('#tblRankingMEP tbody');
	let lista_rankingMep = obtener_rankingMEP();
	tbody.innerHTML = ''; 
	let filtro = inputFiltro.value;

	for(let i = 0; i < lista_rankingMep.length; i++){

		if(lista_rankingMep[i]['nombrecomercial'].toLowerCase().includes(filtro.toLowerCase())) {

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
      	celdaCalifnum.innerHTML = Number(lista_rankingMep[i]['califnum']);
      	//celdaCalifanno.innerHTML = lista_rankingMep[i]['califanno'];

      	centros.push(celdaNombrecomercial.innerHTML);
      	calificaciones.push(celdaCalifnum.innerHTML);
		}
	}
};


//GRAFICOS

anychart.onDocumentReady(function() {

    // set the data
    var data = {
        header: ["Centro Educativo", "Calificaciones"],
      rows: [
        [centros[0], calificaciones[0]],
        [centros[1], calificaciones[1]],
        [centros[2], calificaciones[2]],
        [centros[3], calificaciones[3]],
        [centros[4], calificaciones[4]],
        [centros[5], calificaciones[5]],
        [centros[6], calificaciones[6]],
        [centros[7], calificaciones[7]],
        [centros[8], calificaciones[8]],
        [centros[9], calificaciones[9]]

    ]};

    // create the chart
   var chart = anychart.column();
   chart.palette(anychart.palettes.default);

    // add data
    chart.data(data);

    // set the chart title
    chart.title("10 mejores Centros Educativos (MEP)");


  // draw
  chart.container("container");
  chart.draw();
});

//----------------------------------------------------//

//ordena los datos de las tablas
function init() {
    var sorter = tsorter.create('tblRankingMEP');
}
    
window.onload = init;

