'use strict';


showData();

const boton_reg= document.querySelector('#btn_addUtiles');

const sltNivel=document.querySelector('#SelNivel');
const inputTipo=document.querySelector('#txtType');
const inputCantidad=document.querySelector('#numbQty');
const inputDescripcion=document.querySelector('#txtDescrip');

function catchData(){
    let nivel= sltNivel.selectedOptions[0].textContent;
    let tipo= inputTipo.value;
    let cantidad= inputCantidad.value;
    let descripcion= inputDescripcion.value;

    registrar_listaUtilesMEP(nivel, tipo, cantidad, descripcion);
    
    
};

boton_reg.addEventListener('click', catchData);



function showData(){
    let listaMEP= obtener_listaUtilesMEP(); 

    let tbody = document.querySelector('#tblColegio tbody');
    tbody.innerHTML = '';
    let tbody1 = document.querySelector('#tblEscuela tbody');
    tbody1.innerHTML = '';
   

    let filtro = "Colegio";
    let filtro2 = "Escuela";

    

    for(let i = 0; i < listaMEP.length; i++){


        if(listaMEP[i]['nivel'].toLowerCase().includes(filtro.toLowerCase())){
            
            
            let fila = tbody.insertRow();
            
            
            let celdaTipo = fila.insertCell();
            let celdaCantidad = fila.insertCell();
            let celdaDescripcion = fila.insertCell();
           
            
            celdaTipo.innerHTML = listaMEP[i]['tipo_articulo'];
            celdaCantidad.innerHTML = listaMEP[i]['cantidad'];
            celdaDescripcion.innerHTML = listaMEP[i]['descripcion'];
         
            
        };

        if(listaMEP[i]['nivel'].toLowerCase().includes(filtro2.toLowerCase())){

            

            let fila = tbody1.insertRow(); 
            
            
            let celdaTipo = fila.insertCell();
            let celdaCantidad = fila.insertCell();
            let celdaDescripcion = fila.insertCell();
           
           
            celdaTipo.innerHTML = listaMEP[i]['tipo_articulo'];
            celdaCantidad.innerHTML = listaMEP[i]['cantidad'];
            celdaDescripcion.innerHTML = listaMEP[i]['descripcion'];
         
            
        }
     
 
    };
    
};