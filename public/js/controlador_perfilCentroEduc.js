'use stric';



var url = window.location.href;
    var b = url.substring(url.indexOf("=")+1);
    console.log(b);


    let listaCen=[];
    let listaRe=[];
    listaCen=obtener_lista_centros();
    
    for(let i = 0; i <listaCen.length; i++){
        let count=0;
        if (listaCen[i]['_id']==b){
             listaRe[count]=listaCen[i];
            count++;
           };
    };

    console.log(listaRe);

let identCentro = '';

    for (let j=0; j< listaRe.length;j++){
let id_usuario = listaRe[j]['_id'];
identCentro = id_usuario;
let escudo_usuario=listaRe[j]['escudo'];
let nombre_usuario=listaRe[j]['nombrecomercial'];
let referenciaH_usuario=listaRe[j]['refhist'];
let facebook_usuario=listaRe[j]['facebook'];
let sitioweb_usuario=listaRe[j]['sitioweb'];

let bilingue_usuario=listaRe[j]['bilingue'];
let idiomas_usuario=listaRe[j]['idiomas'];
let primaria_usuario=listaRe[j]['primaria'];
let secundaria_usuario=listaRe[j]['secundaria'];
let tecnico_usuario=listaRe[j]['tecnico'];
let mixto_usuario=listaRe[j]['mixto'];
let vocacional_usuario=listaRe[j]['vocacional'];
let tipoDeCentro_usuario=listaRe[j]['tipodecentro'];


let img=document.querySelector('#imgEsc');
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


if (bilingue_usuario==true){
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

if (idiomas_usuario==true){
    let idiomas=document.querySelector('#listBil2');
    idiomas.innerHTML="Imparte otros idiomas";
}else{
    let idiomas=document.querySelector('#listBil2');
    idiomas.innerHTML="No imparte otros idiomas";
};

if (primaria_usuario==true){
    let primaria=document.querySelector('#listBil3');
    primaria.innerHTML="Primaria";
}else{
    let primaria=document.querySelector('#listBil3');
    primaria.innerHTML="No imparte primaria";
};

if (secundaria_usuario==true){
    let secundaria=document.querySelector('#listBil4');
    secundaria.innerHTML="Secundaria";
}else{
    let secundaria=document.querySelector('#listBil4');
    secundaria.innerHTML="No imparte secundaria";
};
if (tecnico_usuario==true){
    let tecnico=document.querySelector('#listBil5');
    tecnico.innerHTML="Técnico";
}else{
    let tecnico=document.querySelector('#listBil5');
    tecnico.innerHTML="No imparte educación técnica";
};
if (mixto_usuario==true){
    let mixto=document.querySelector('#listBil7');
    mixto.innerHTML="Mixto";
}else{
    let mixto=document.querySelector('#listBil7');
    mixto.innerHTML="No es Mixto";
};
if (vocacional_usuario==true){
    let vocacional=document.querySelector('#listBil8');
    vocacional.innerHTML="Vocacional";
}else{
    let vocacional=document.querySelector('#listBil8');
    vocacional.innerHTML="No es Vocacional";
};
let tipoDeCentro=document.querySelector('#listBil9');
    tipoDeCentro.innerHTML=tipoDeCentro_usuario;
};

const botonAgendar = document.querySelector('#btnAgendar');

function redireccionarAgendarCita(){
    let url = 'agendarCita.html?b=';
    let res = url.concat(identCentro);
    window.location.href = res;
}

botonAgendar.addEventListener('click', redireccionarAgendarCita);
