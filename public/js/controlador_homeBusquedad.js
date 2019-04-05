'use strict';

const inputFilter= document.querySelector('#txtfil_Word');
const sltNivel=document.querySelector('#SelNivel');
const boton= document.querySelector('#btnSearch1');

boton.addEventListener('click' , SearchData);


function SearchData(){

	let filter=inputFilter.value;
	let nivel=sltNivel.selectedOptions[0].textContent;

// metodo para redireccionar a la pantalla de resultados de la busqueda se 
// envian los datos por la url en forma de get.
	let b=filter+","+nivel;
	window.location.replace("http://localhost:4000/resultado_busqueda_success.html?b="+b);
};

