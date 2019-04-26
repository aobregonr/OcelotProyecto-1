'use stric';



var url = window.location.href;
    var b = url.substring(url.indexOf("=")+1);
    console.log(b);
// ___________________________________________________________________________
const boton_comentario = document.querySelector('#sendComment');
const input_msg = document.querySelector('#msgComment');

boton_comentario.addEventListener('click', obtener_comentario);
//_______________________________________________________________________________


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
//
let telefono_centro = listaRe[j]['telefonoctro'];
let email_centro = listaRe[j]['emailinstit'];
let direccion_centro = listaRe[j]['direccionexacta'];


//agregar nombre, escudo
let img=document.querySelector('#imgEsc');
img.setAttribute("src", escudo_usuario);
let h1Nombre= document.querySelector('#etNombre');
h1Nombre.innerHTML=nombre_usuario;
let refHist= document.querySelector('#PaRef');
refHist.innerHTML=referenciaH_usuario;

//agregar info de contacto
let phone = document.querySelector('#contactPhone');
phone.innerHTML = telefono_centro;
let email = document.querySelector('#contactEmail');
email.innerHTML = email_centro;
let adress = document.querySelector('#contactAdress');
adress.innerHTML = direccion_centro;

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



let listaActiv=[];
listaActiv = obtener_actividad();

imprimir_listaActividades();

function imprimir_listaActividades() {  
    
    let tbody = document.querySelector('#tblActivities tbody');
    tbody.innerHTML = '';  //asegura que la tabla está vacía antes de imprimir y evtita duplicados

    for (let i = 0; i < listaActiv.length; i++) {

        if (listaActiv[i]['cod']==b){

            let fila = tbody.insertRow();
    
            let celdaActividad = fila.insertCell();
            let celdaImagen= fila.insertCell();
            //
            celdaActividad.innerHTML = listaActiv[i]['actividad'];
            let imagen = document.createElement('img');
                imagen.classList.add('imagenTabla'); //para definir el tamano de la imagen
    
                if(listaActiv[i]['imagen']){
                    imagen.src = listaActiv[i]['imagen'];
                }else{
                    imagen.src = 'imgs/actividad.png';
                }
    
                celdaImagen.appendChild(imagen);
        };


    }
};


let listaFaqs=[];
listaFaqs = obtener_faq();

imprimir_listaFaqs();

function imprimir_listaFaqs() {  
    
    for (let i = 0; i < listaFaqs.length; i++) {
        
        if (listaFaqs[i]['cod']==b){


            let faqcards = document.querySelector('#faqCards');
            // faqcards.innerHTML = '';
            var midiv1 = document.createElement("div");
            midiv1.setAttribute("id","card"+i);
            midiv1.setAttribute("class","card");
             var midiv = document.createElement("div");
             midiv.setAttribute("id","heading"+i);
             midiv.setAttribute("class","card header");
             midiv.setAttribute("role","tab");
                var midiv4 = document.createElement("a");
                midiv4.setAttribute("data-toggle","collapse");
                midiv4.setAttribute("id","a"+i);
                midiv4.setAttribute("data-parent","#accordionEx");
                midiv4.setAttribute("href","#collapse"+i);
                midiv4.setAttribute("aria-expanded","true");
                midiv4.setAttribute("aria-controls","collapse"+i);
                    var midiv5 = document.createElement("h5");
                    midiv5.setAttribute("class","mb-0");
                    midiv5.setAttribute("id","h5"+i);
                    midiv5.innerHTML = listaFaqs[i]['pregunta'];
                        var midiv6 = document.createElement("i");
                        midiv6.setAttribute("class","fas fa-angle-down ");
    
                        document.querySelector("#faqCards").appendChild(midiv1);
                        document.querySelector("#card"+i).appendChild(midiv);
                        document.querySelector("#heading"+i).appendChild(midiv4);
                        document.querySelector("#a"+i).appendChild(midiv5);
                        document.querySelector("#h5"+i).appendChild(midiv6);
            
            
                 var midiv2 = document.createElement("div");
                 midiv2.setAttribute("id","collapse"+i);
                 midiv2.setAttribute("class","collapse show");
                 midiv2.setAttribute("role","tabpanel"); 
                 midiv2.setAttribute("aria-labelledby","heading"+i);
                 midiv2.setAttribute("data-parent","#accordionEx");
                        var midiv3 = document.createElement("div");
                        midiv3.setAttribute("class","card-body");
                        midiv3.innerHTML = listaFaqs[i]['respuesta'];
    
                        document.querySelector("#card"+i).appendChild(midiv2);
                        document.querySelector("#collapse"+i).appendChild(midiv3);
        };
                       
                  

    };
};



function obtener_comentario(){

    let msg = input_msg.value;

    if (msg!=''){
        Swal.fire({
            type: 'success',
            title: 'Gracias sus comentarios son valiosos para nosotros!',
            text: 'Su comentario:  "'+msg+'"   esta pendiente de aprobación...'
           });

           let cod1=b;
           let padre=sessionStorage.getItem('nombre_usuario');
           let padre_apellido=sessionStorage.getItem('apellido_usuario');
           let foto=sessionStorage.getItem('foto_usuario')
           let comentario=msg;

           registrar_comentario( cod1,(padre+" "+padre_apellido), foto, comentario)
                
          input_msg.value='';


    }else{
        Swal.fire({
            type: 'warning',
            title: 'Favor ingrese un comentario en el espacio asignado!',
            text: 'Gracias su opinión es importante para nosotros...'
            
          });
    }

};

let comentarios=[];
comentarios= obtener_comentarios();
console.log(comentarios);

imprimirComentarios();

function imprimirComentarios(){
    

    for (let h=0; h< comentarios.length; h++){

        if (comentarios[h]['cod']==b){

            let commentsList = document.querySelector('#comments_var');
            var midiv1 = document.createElement("div");
            midiv1.setAttribute("id","commentin");
            midiv1.setAttribute("class","comment");
                     var midiv2 = document.createElement("i");
                     midiv2.setAttribute("id","imgPa");                    
                     midiv2.setAttribute("class","fas fa-user-circle fa-5x");
                     
                    
                     let foto= comentarios[h]['foto'];
                     var imagen2 = document.createElement('img');
                     imagen2.setAttribute("id","imgpadre");
                     imagen2.setAttribute("class","fas fa-user-circle fa-5x");
                     imagen2.src = foto;
    
                 var midiv3 = document.createElement("p");
                 midiv3.setAttribute("class","name");
                 let padre=comentarios[h]['padre'];
                
                 midiv3.innerHTML= padre;                
                 
    
                 var midiv4 = document.createElement("p");
                 midiv4.setAttribute("class","pComment");
                 midiv4.innerHTML=comentarios[h]['comentario'];
    
    
                 document.querySelector("#comments_var").appendChild(midiv1);
                 document.querySelector("#commentin").appendChild(imagen2);
                 document.querySelector("#imgpadre").appendChild(midiv2);
                 document.querySelector("#commentin").appendChild(midiv3);
                 document.querySelector("#commentin").appendChild(midiv4);
        };

       



    };

}


let listaNovedades = obtener_novedad();
imprimir_listaNovedades();  



function imprimir_listaNovedades() {  
    
    let tbody = document.querySelector('#tblNewsfeed tbody');
    tbody.innerHTML = '';  //asegura que la tabla está vacía antes de imprimir y evita duplicados

    for (let i = 0; i < listaNovedades.length; i++) {

        if (listaNovedades[i]['id']==b){


            let fila = tbody.insertRow();
    
            let celdaImagen= fila.insertCell();
            //
            let imagen = document.createElement('img');
                imagen.classList.add('imagenNews'); //para definir el tamano de la imagen
    
                if(listaNovedades[i]['imagen']){
                    imagen.src = listaNovedades[i]['imagen'];
                }else{
                    imagen.src = '';
                }
    
                celdaImagen.appendChild(imagen);



        };
     


    }
};

