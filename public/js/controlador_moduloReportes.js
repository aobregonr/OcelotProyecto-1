'use strict';


const inputFiltro = document.querySelector('#txtFiltro');

let lista_centros = obtener_lista_usuarios(); //obtener centros educ
let lista_ranking = obtener_rankingMEP(); //obtener centros educativos rankeados por admin

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
      	celdaCalifnum.innerHTML = lista_rankingMep[i]['califnum'];
      	//celdaCalifanno.innerHTML = lista_rankingMep[i]['califanno'];
}
	
	};

};




		