'use strict';

var url = window.location.href;
    var cod1 = url.substring(url.indexOf("=")+1);
let cod3=sessionStorage.getItem('id_usuario');
let centroName=sessionStorage.getItem('nombre_usuario');
let titleCentro = document.querySelector('#centroInfo');
let titleCentro2 = document.querySelector('#title2Centro');

let tipoUser=sessionStorage.getItem('tipo_usuario');

if (tipoUser=='PadreFam'){
    showDataPad();
}else{
    showData();
};



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

    registrar_listaUtilesCentro(cod3,centroName,nivel, tipo, cantidad, descripcion);
    showData();    
};

boton_reg.addEventListener('click', catchData);



function showData(){

   
    

    let listaCen= obtener_listaUtilesCentro(); 

    let tbody = document.querySelector('#tblColegio tbody');
    tbody.innerHTML = '';
    let tbody1 = document.querySelector('#tblEscuela tbody');
    tbody1.innerHTML = '';

    let filtro = "Colegio";
    let filtro2 = "Escuela";


    
    console.log(cod3);
    let usuarioCentro=obtener_usuario_por_id(cod3);
    console.log(usuarioCentro.nombrecomercial);
    titleCentro.innerHTML = "Lista Utiles "+usuarioCentro.nombrecomercial;
    titleCentro2.innerHTML = "Lista Utiles "+usuarioCentro.nombrecomercial;

    for(let i = 0; i < listaCen.length; i++){

        if (listaCen[i]['cod']==cod1 || listaCen[i]['cod']==cod3){

        

                    if(listaCen[i]['nivel'].toLowerCase().includes(filtro.toLowerCase())){
                        
                        
            
                        let fila = tbody.insertRow();
                        
                        
                        let celdaTipo = fila.insertCell();
                        let celdaCantidad = fila.insertCell();
                        let celdaDescripcion = fila.insertCell();
                       
                        
                        celdaTipo.innerHTML = listaCen[i]['tipo_articulo'];
                        celdaCantidad.innerHTML = listaCen[i]['cantidad'];
                        celdaDescripcion.innerHTML = listaCen[i]['descripcion'];
                     
                        
                    };
            
                    if(listaCen[i]['nivel'].toLowerCase().includes(filtro2.toLowerCase())){
            
                       
            
                        let fila = tbody1.insertRow(); 
                        
                        
                        let celdaTipo = fila.insertCell();
                        let celdaCantidad = fila.insertCell();
                        let celdaDescripcion = fila.insertCell();
                       
                       
                        celdaTipo.innerHTML = listaCen[i]['tipo_articulo'];
                        celdaCantidad.innerHTML = listaCen[i]['cantidad'];
                        celdaDescripcion.innerHTML = listaCen[i]['descripcion'];
                     
                        
                    }
                 
             
        };

    };
    
};

function showDataPad(){

   
    

    let listaCen= obtener_listaUtilesCentro(); 

    let tbody = document.querySelector('#tblColegio tbody');
    tbody.innerHTML = '';
    let tbody1 = document.querySelector('#tblEscuela tbody');
    tbody1.innerHTML = '';

    let filtro = "Colegio";
    let filtro2 = "Escuela";


    console.log(cod1);
   
    let usuarioCentro=obtener_usuario_por_id(cod1);
    console.log(usuarioCentro.nombrecomercial);
    titleCentro.innerHTML = "Lista Utiles "+usuarioCentro.nombrecomercial;
    titleCentro2.innerHTML = "Lista Utiles "+usuarioCentro.nombrecomercial;

    for(let i = 0; i < listaCen.length; i++){

        if (listaCen[i]['cod']==cod1){

        

                    if(listaCen[i]['nivel'].toLowerCase().includes(filtro.toLowerCase())){
                        
                        
            
                        let fila = tbody.insertRow();
                        
                        
                        let celdaTipo = fila.insertCell();
                        let celdaCantidad = fila.insertCell();
                        let celdaDescripcion = fila.insertCell();
                       
                        
                        celdaTipo.innerHTML = listaCen[i]['tipo_articulo'];
                        celdaCantidad.innerHTML = listaCen[i]['cantidad'];
                        celdaDescripcion.innerHTML = listaCen[i]['descripcion'];
                     
                        
                    };
            
                    if(listaCen[i]['nivel'].toLowerCase().includes(filtro2.toLowerCase())){
            
                       
            
                        let fila = tbody1.insertRow(); 
                        
                        
                        let celdaTipo = fila.insertCell();
                        let celdaCantidad = fila.insertCell();
                        let celdaDescripcion = fila.insertCell();
                       
                       
                        celdaTipo.innerHTML = listaCen[i]['tipo_articulo'];
                        celdaCantidad.innerHTML = listaCen[i]['cantidad'];
                        celdaDescripcion.innerHTML = listaCen[i]['descripcion'];
                     
                        
                    }
                 
             
        };

    };
    
};