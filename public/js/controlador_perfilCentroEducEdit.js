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


    let comentarios=[];
    comentarios= obtener_comentarios();
    console.log(comentarios);
    
    let b=sessionStorage.getItem('id_usuario');
    imprimirComentarios();


//ranking Padres de familia y MEP
//let lista_rankingPF = obtener_rankingPF();
let lista_ranking = obtener_rankingMEP();
let lista_rankingPF = obtener_rankingPF();

//mostrar_rankingPF();
mostrar_rankingMep();
mostrar_rankingPF_promedio();



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

function mostrar_rankingMep(){

   let centroActual = obtener_usuario_por_id(b);

    //la tabla de ranking del MEP no guarda el id, entonces lo retengo por nombre.
   
    let tbody = document.querySelector('#tblRankingMEP tbody');
    let lista_rankingMep = obtener_rankingMEP();
    tbody.innerHTML = ''; 

    //sin calificacion por defecto
    let fila = tbody.insertRow();
    let celdaRankingmepNoCalif = fila.insertCell(); 
    celdaRankingmepNoCalif.innerHTML = '<i id="star1" class="fas fa-star fa-1x" style="color: gray;"><i id="star2" class="fas fa-star fa-1x" style="color: gray;"><i id="star3" class="fas fa-star fa-1x" style="color: gray;"><i id="star4" class="fas fa-star fa-1x" style="color: gray;"><i id="star5" class="fas fa-star fa-1x" style="color: gray;"></i></i></i></i></i>';


    //si hay calificacion:
    for(let i = 0; i < lista_rankingMep.length; i++){
        let fila = tbody.insertRow();

        //mostrar exclusivamente el ranking de UN centro, no de todos
        if (lista_rankingMep[i]['nombrecomercial'] == centroActual.nombrecomercial){
            let celdaRankingmep = fila.insertCell(); 
            celdaRankingmep.innerHTML = lista_rankingMep[i]['rankingmep'];
            //esconder la que no tiene calif.
            celdaRankingmepNoCalif.classList.add('hide');

            break;
        }
    };
};

/*
//MODIFICADA PARA Q SOLO MUESTRE EL COLE ACTUAL (viene del modulo de reportes)
// hace un promedio de la calificacion de todos los padres para cada colegio, no muestra todos. 
function mostrar_rankingPF_promedio(){

    let tbody = document.querySelector('#tblRankingPF_Promedio tbody');
    tbody.innerHTML = ''; 
    let centroActual = obtener_usuario_por_id(b);

    //variables importantes:
    var  count = {}; //diccionario de coles y cantidad de papas que rankearon
    var value = [] //solo las personas que rankearon, numero.
    let promedio = 0 ; // promedio de notas x cole. 


    //obtener primero los repetidos de cada centro
    for(let i = 0; i < lista_rankingPF.length; i++){

      //obtener nombre comercial de cada centro
      let centrosInfo = obtener_usuario_por_id(lista_rankingPF[i]['idcentro']);
     
      //crear un diccionario q diga cual cole y cuantos rankings x cole
      let uniqueCount = [centrosInfo.nombrecomercial];
      uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    }


    //obtener la cantidad de rankings x cole
     for(var key in count) {
        value = count[key];
        var contadorNotas = 0;

        //obtener la suma de las notas de cada cole
        for(let i = 0; i < lista_rankingPF.length; i++){

          let centrosInfo = obtener_usuario_por_id(lista_rankingPF[i]['idcentro']);
          if (centrosInfo.nombrecomercial == key){
          
            let nota = lista_rankingPF[i]['califnum'];
            contadorNotas += parseInt(nota);
            }
        }

      //sacar el promedio con la suma de notas y la cantidad de rankings
      promedio = Math.trunc(contadorNotas / value);

      //key=nombre del cole. 
      //value= cantidad de personas que rankearon el cole.
      //promedio= promedio de nota de ranking basado en los ranking. (truncados)
    

      //generar la tabla
      for(let i = 0; i < lista_rankingPF.length; i++){

        //obtener nombre comercial y escudo de cada centro
        let centrosInfo = obtener_usuario_por_id(lista_rankingPF[i]['idcentro']);
        let papaInfo = obtener_usuario_por_id(lista_rankingPF[i]['idpadres']);

       if (key == centrosInfo.nombrecomercial && key == centroActual.nombrecomercial){

          let fila = tbody.insertRow();

          let celdaEstrellas = fila.insertCell(); 

          //definir la cantidad de estrellas basado en el promedio:
          let promedioStars = '';

          if (promedio == 0){
            promedioStars = '<i id="star1" class="fas fa-star fa-1x" style="color: gray;"><i id="star2" class="fas fa-star fa-1x" style="color: gray;"><i id="star3" class="fas fa-star fa-1x" style="color: gray;"><i id="star4" class="fas fa-star fa-1x" style="color: gray;"><i id="star5" class="fas fa-star fa-1x" style="color: gray;"></i></i></i></i></i>'; 
          }

          else if (promedio == 1){
            promedioStars = '<i id="star1" class="fas fa-star fa-1x" style="color: orange;"><i id="star2" class="fas fa-star fa-1x" style="color: gray;"><i id="star3" class="fas fa-star fa-1x" style="color: gray;"><i id="star4" class="fas fa-star fa-1x" style="color: gray;"><i id="star5" class="fas fa-star fa-1x" style="color: gray;"></i></i></i></i></i>';
          }

          else if (promedio == 2){
            promedioStars = '<i id="star1" class="fas fa-star fa-1x" style="color: orange;"><i id="star2" class="fas fa-star fa-1x" style="color: orange;"><i id="star3" class="fas fa-star fa-1x" style="color: gray;"><i id="star4" class="fas fa-star fa-1x" style="color: gray;"><i id="star5" class="fas fa-star fa-1x" style="color: gray;"></i></i></i></i></i>';
          }

          else if (promedio == 3){
            promedioStars = '<i id="star1" class="fas fa-star fa-1x" style="color: orange;"><i id="star2" class="fas fa-star fa-1x" style="color: orange;"><i id="star3" class="fas fa-star fa-1x" style="color: orange;"><i id="star4" class="fas fa-star fa-1x" style="color: gray;"><i id="star5" class="fas fa-star fa-1x" style="color: gray;"></i></i></i></i></i>';
          }

          else if (promedio == 4){
            promedioStars =  '<i id="star1" class="fas fa-star fa-1x" style="color: orange;"><i id="star2" class="fas fa-star fa-1x" style="color: orange;"><i id="star3" class="fas fa-star fa-1x" style="color: orange;"><i id="star4" class="fas fa-star fa-1x" style="color: orange;"><i id="star5" class="fas fa-star fa-1x" style="color: gray;"></i></i></i></i></i>';
          }

          else if (promedio == 5){
            promedioStars =  '<i id="star1" class="fas fa-star fa-1x" style="color: orange;"><i id="star2" class="fas fa-star fa-1x" style="color: orange;"><i id="star3" class="fas fa-star fa-1x" style="color: orange;"><i id="star4" class="fas fa-star fa-1x" style="color: orange;"><i id="star5" class="fas fa-star fa-1x" style="color: orange;"></i></i></i></i></i>';
          }
    
          //llenar la tabla con los datos (hacer un condicional para que no se repitan)
         
            celdaEstrellas.innerHTML = promedioStars;
            break;
        }
          
        }
      }
};

*/



let listaCitas = listarCitas();
mostrar_citas();



function mostrar_citas(){

    //obtener el padre de familia actual
    let centroActualId = sessionStorage.getItem('id_usuario');

    //crear la tabla
     let tbody = document.querySelector('#tblCitas tbody');
     tbody.innerHTML = '';

      for (let i = 0; i < listaCitas.length; i++) {

        //si el padre de la cita coincide con el que inicio de sesion, mostrar cita
        if (centroActualId == listaCitas[i]['identCentroEducativo'] && listaCitas[i]['estado'] != 'cancelada'){


            let fila = tbody.insertRow();

            let celdaNombre = fila.insertCell();
            let celdaApellido = fila.insertCell();
            let celdaCorreo = fila.insertCell();
            let celdaFecha = fila.insertCell();
            let celdaHora = fila.insertCell();
            let celdaTelefono = fila.insertCell();
            let celdaDescripcion = fila.insertCell();
            let celdaEstado = fila.insertCell();
            let celdaHerramientas = fila.insertCell();


            //
            celdaNombre.innerHTML = listaCitas[i]['nombre'];
            celdaApellido.innerHTML = listaCitas[i]['apellido'];
            celdaCorreo.innerHTML = listaCitas[i]['email'];
            celdaFecha.innerHTML = listaCitas[i]['fecha'];
            celdaHora.innerHTML = listaCitas[i]['hora'];
            celdaTelefono.innerHTML = listaCitas[i]['telefono'];
            celdaDescripcion.innerHTML = listaCitas[i]['descripcion'];
            celdaEstado.innerHTML = listaCitas[i]['estado'];

             //boton activar centro

            let botonActivar = document.createElement('a');
            botonActivar.classList.add('fas');
            botonActivar.classList.add('fa-check-circle');
            botonActivar.classList.add('disabled');
            botonActivar.classList.add('aprovIcon'); //es para dar espacio

            //dataset (propiedad q permite definir atributos personalizados para un elemento de html)
            botonActivar.dataset._id = listaCitas[i]['_id'];

            //boton rechazar centro
            let botonCancelar = document.createElement('a');
            botonCancelar.classList.add('fas');
            botonCancelar.classList.add('fa-times-circle'); 
            botonCancelar.classList.add('rejectIcon'); //es para dar espacio

            //dataset (propiedad q permite definir atributos personalizados para un elemento de html)
            botonCancelar.dataset._id = listaCitas[i]['_id'];

            //insertar los botones dinamicamente 
            celdaHerramientas.appendChild(botonActivar);
            celdaHerramientas.appendChild(botonCancelar);

            //agregar las funciones a los botones
            botonActivar.addEventListener('click', aceptarCita);
            botonCancelar.addEventListener('click', cancelarCita);


            if (listaCitas[i]['estado'] == 'activo' ||  listaCitas[i]['estado'] == 'cancelada'){
                botonCancelar.classList.add('hide');
                botonActivar.classList.add('hide');
            }
        }
    }
}


function aceptarCita(){
    //binding epico increible!! <3  (this)
    //sirve para enlazar la funcion con el contexto que la llama. 
    let id = this.dataset._id;
    let cita = obtener_usuario_por_id(id);
    let estado = cita.estado;

    estado = 'activo'; //hacer que el estado ahora sea activo.


    modificarCita(id,  estado);

    //dar un mensaje de confirmacion
     swal.fire({
          type : 'success',
            buttonsStyling: false,
      customClass: {
      title: 'title-class',
      confirmButton: 'confirm-button-class'},
            text: 'La cita ha sido aprobada con éxito.',
          });

    //refresca la tabla
     listaCitas = listarCitas();
    mostrar_citas();

};

function cancelarCita(){
    let id = this.dataset._id;
    let cita = obtener_usuario_por_id(id);
    let estado = cita.estado;

    estado = 'cancelada'; //hacer que el estado ahora sea activo.


    modificarCita(id,  estado);

    //dar un mensaje de confirmacion
     swal.fire({
          type : 'success',
            buttonsStyling: false,
      customClass: {
      title: 'title-class',
      confirmButton: 'confirm-button-class'},
            text: 'La cita ha sido cancelada con éxito.',
          });

    //refresca la tabla
    listaCitas = listarCitas();
    mostrar_citas();

};

