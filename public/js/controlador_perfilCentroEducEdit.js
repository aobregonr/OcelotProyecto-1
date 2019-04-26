'use strict';



let escudo_usuario=sessionStorage.getItem('escudo_usuario');
let nombre_usuario=sessionStorage.getItem('nombre_usuario');
let referenciaH_usuario=sessionStorage.getItem('ref_usuario');
let facebook_usuario=sessionStorage.getItem('fb_usuario');
let sitioweb_usuario=sessionStorage.getItem('sitioweb_usuario');
let bilingue_usuario=sessionStorage.getItem('bilingue_usuario');
let idiomas_usuario=sessionStorage.getItem('idiomas_usuario');
let primaria_usuario=sessionStorage.getItem('primaria_usuario');
let secundaria_usuario=sessionStorage.getItem('secundaria_usuario');
let tecnico_usuario=sessionStorage.getItem('tecnico_usuario');
let mixto_usuario=sessionStorage.getItem('mixto_usuario');
let vocacional_usuario=sessionStorage.getItem('vocacional_usuario');
let tipoDeCentro_usuario=sessionStorage.getItem('tipoDeCentro_usuario');



let img=document.querySelector('#imgCentro');
img.setAttribute("src", escudo_usuario);
let h1Nombre= document.querySelector('#etNombre');
h1Nombre.innerHTML=nombre_usuario;
let refHist= document.querySelector('#PaRef');
refHist.innerHTML=referenciaH_usuario;



//ingresar al fb del centro
function fb(){
    let faceLink= document.querySelector('#facLink');
    window.location.href =facebook_usuario;
} 


//ingresar al sitio oficial del centro

function sitioweb(){
    let sitioweb= document.querySelector('#webLink');
    window.location.href =sitioweb_usuario;
}


console.log(bilingue_usuario);
console.log(idiomas_usuario);

if (bilingue_usuario=='true'){
    let bilingue=document.querySelector('#listBil1');
    bilingue.innerHTML="Bilingue";
    let espannol=document.querySelector('#listBil6');
    espannol.innerHTML="Español";
}else{
    let espannol=document.querySelector('#listBil6');
    espannol.innerHTML="Español";
    let bilingue=document.querySelector('#listBil1');
    bilingue.innerHTML="No es bilingue";
};

if (idiomas_usuario=='true'){
    let idiomas=document.querySelector('#listBil2');
    idiomas.innerHTML="Imparte otros idiomas";
}else{
    let idiomas=document.querySelector('#listBil2');
    idiomas.innerHTML="No imparte otros idiomas";
};

if (primaria_usuario=='true'){
    let primaria=document.querySelector('#listBil3');
    primaria.innerHTML="Primaria";
}else{
    let primaria=document.querySelector('#listBil3');
    primaria.innerHTML="No imparte primaria";
};

if (secundaria_usuario=='true'){
    let secundaria=document.querySelector('#listBil4');
    secundaria.innerHTML="Secundaria";
}else{
    let secundaria=document.querySelector('#listBil4');
    secundaria.innerHTML="No imparte secundaria";
};
if (tecnico_usuario=='true'){
    let tecnico=document.querySelector('#listBil5');
    tecnico.innerHTML="Técnico";
}else{
    let tecnico=document.querySelector('#listBil5');
    tecnico.innerHTML="No imparte educación técnica";
};
if (mixto_usuario=='true'){
    let mixto=document.querySelector('#listBil7');
    mixto.innerHTML="Mixto";
}else{
    let mixto=document.querySelector('#listBil7');
    mixto.innerHTML="No es Mixto";
};
if (vocacional_usuario=='true'){
    let vocacional=document.querySelector('#listBil8');
    vocacional.innerHTML="Vocacional";
}else{
    let vocacional=document.querySelector('#listBil8');
    vocacional.innerHTML="No es Vocacional";
};
let tipoDeCentro=document.querySelector('#listBil9');
    tipoDeCentro.innerHTML=tipoDeCentro_usuario;