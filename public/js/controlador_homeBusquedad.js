'use strict';

const inputFilter= document.querySelector('·txtfil_Word');
const sltNivel=document.querySelector('#stlnivel');
const boton= document.querySelector('#yellowBtn');

obtener_lista_centros();

boton.addEventListener('click' , SearchData);


function SearchData(){
    
    let ListCen=obtener_lista_centros();
    let filter=inputFilter.value;
    let nivel= sltNivel.selectedOptions[0].textContent;

    let tbody = document.querySelector('#tblXXX tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < ListCen.length; i++){


        if((ListCen[i]['tipoDeCentro'].toLowerCase().includes(nivel.toLowerCase()) && (ListCen[i][''].toLowerCase().includes(filter.toLowerCase())){
            
            
            let fila = tbody.insertRow();
            
            
            let celdaTipo = fila.insertCell();
            let celdaCantidad = fila.insertCell();
            let celdaDescripcion = fila.insertCell();
           
            
            celdaTipo.innerHTML = listaMEP[i]['tipo_articulo'];
            celdaCantidad.innerHTML = listaMEP[i]['cantidad'];
            celdaDescripcion.innerHTML = listaMEP[i]['descripcion'];
         
            
        }else{
            location.href="../public/resultado_busqueda_fail.html";
        };

        
 
    };


};

