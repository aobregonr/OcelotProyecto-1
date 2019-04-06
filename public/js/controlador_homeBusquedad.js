'use strict';

const inputFilter= document.querySelector('#txtfil_Word');
const sltNivel=document.querySelector('#SelNivel');
const boton= document.querySelector('#btnSearch1');

boton.addEventListener('click' , SearchData);


function SearchData(){

	let filter=inputFilter.value;
	let nivel=sltNivel.selectedOptions[0].textContent;

	//validar
	let bError = false;

	if (filter == '' && nivel == '' || filter == ''){
        bError = true; 
    	};

    if(bError == true){
        swal.fire({
            type : 'warning',
            buttonsStyling: false,
            customClass: {
            title: 'title-class',
            confirmButton: 'confirm-button-class'},
            text: 'Por favor ingrese un criterio en la barra de búsqueda',
            type: 'warning',
          });

    }else{ 
    // metodo para redireccionar a la pantalla de resultados de la busqueda se 
    // envian los datos por la url en forma de get.
    let dato1=filter+" "+nivel;
	let b=dato1+","+nivel;
	window.location.replace("http://localhost:4000/resultado_busqueda_success.html?b="+b);}

};

