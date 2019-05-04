'use strict';


const inputFiltro = document.querySelector('#txtFiltro');
const inputFiltro2 = document.querySelector('#txtFiltro2');

let lista_centros = obtener_lista_usuarios(); //obtener centros educ


//contenedores de nombres y notas para crear graficos
let calificaciones=[];
let centros = [];
let calificaciones2=[];
let centros2 = [];
let calificaciones3=[];
let centros3 = [];
let calificaciones4=[];
let centros4 = [];
let calificaciones5=[];
let centros5 = [];
let calificaciones6=[];
let centros6 = [];

//ranking Padres de familia y MEP
let lista_rankingPF = obtener_rankingPF();
let lista_ranking = obtener_rankingMEP();


mostrar_rankingMep();
mostrar_rankingPF_promedio();
mostrar_top10_escuelasMEP();
mostrar_top10_colegiosMEP();
mostrar_top10_escPriMEP();
mostrar_top10_escPubMEP();
mostrar_top10_colPubMEP();
mostrar_top10_colPriMEP();



inputFiltro.addEventListener('keyup', mostrar_rankingMep);
inputFiltro2.addEventListener('keyup', mostrar_rankingPF_promedio);


//acordion 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



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
      	celdaCalifnum.innerHTML = Number(lista_rankingMep[i]['califnum']);
      	//celdaCalifanno.innerHTML = lista_rankingMep[i]['califanno'];

   
		}
	}
};


//ESTA FUNCION ES DIFERENTE A LA DE CENTROS EDUC (EL Q VEN LOS PADRES) PORQUE:
// hace un promedio de la calificacion de todos los padres para cada colegio, no muestra todos. 
function mostrar_rankingPF_promedio(){

    let tbody = document.querySelector('#tblRankingPF tbody');
    tbody.innerHTML = ''; 
    let filtro2 = inputFiltro2.value;

    //variables importantes:
    var count = {}; //diccionario de coles y cantidad de papas que rankearon
    var value = [] //solo las personas que rankearon, numero.
    let promedio = 0 ; // promedio de notas x cole. \
    let centrosList = []; //lista de la info de todos los coles.


    //obtener primero los repetidos de cada centro
    for(let i = 0; i < lista_rankingPF.length; i++){

      //obtener nombre comercial de cada centro
       let centrosInfo =  obtener_usuario_por_id(lista_rankingPF[i]['idcentro']);
       centrosList.push(centrosInfo)

   
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

          if (centrosList[i].nombrecomercial == key){
          
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

        //el filtro aun no sirve
        if(key.toLowerCase().includes(filtro2.toLowerCase())) { 
           if (key == centrosList[i].nombrecomercial){

          let fila = tbody.insertRow();

          let celdaCentro = fila.insertCell();
          let celdaEscudo = fila.insertCell();
          let celdaPromedio =  fila.insertCell();

          let imagen = document.createElement('img');
              imagen.classList.add('imagenTabla'); //para definir el tamano de la imagen

              if(centrosList[i].escudo){
                  imagen.src = centrosList[i].escudo;
              }else{
                  if (lista_usuarios[i]['tipo'] == 'CentroEducativo'){
                  imagen.src = 'imgs/escudo.png';
              }}

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
    
          //llenar la tabla con los datos 
         
          celdaCentro.innerHTML = centrosList[i].nombrecomercial;
          celdaEscudo.appendChild(imagen);
          celdaPromedio.innerHTML = promedio;
          celdaEstrellas.innerHTML = promedioStars;
          break;
        }
          
        }
      }}
};


//----------------------------------------------------//

//ordena los datos de las tablas con flechitas en nombre comercial y calificacion
function init() {
    var sorter = tsorter.create('tblRankingMEP');
    var sorter2 = tsorter.create('tblRankingPF');
}
    
window.onload = init;


/*----------------------------------------------------------------------------*/

function mostrar_top10_escuelasMEP(){
 
  let lista_rankingMep = obtener_rankingMEP();
  let top10centros =[];


  //ordena ascendente
  function sortArrayOfObjects(arrayToSort, key) {
      function compareObjects(a, b) {
          if (a[key] < b[key])
              return -1;
          if (a[key] > b[key])
              return 1;
          return 0;
      }

      return arrayToSort.sort(compareObjects);
  }

  //centros ordenados x calificacion de menor a mayor
  let centrosAscendente = sortArrayOfObjects(lista_rankingMep, 'califnum');

  //centros ordenados x calificacion de mayor a menor
  let centrosDescendente = centrosAscendente.reverse()

  //obtener solo escuelas  MEP
  let primarias = []  


  for(let i = 0; i < centrosDescendente.length; i++){

    if (centrosDescendente[i]['primaria'] == true){
        var x=(centrosDescendente[i])
        primarias.push(x)
       
    }}


  //Obtener solo las mejores 10
  let top10escuelas = primarias.slice(0,10)

    //generar la tabla

    let tbody = document.querySelector('#tbltop10escuelas tbody');
    //let lista_rankingMep = obtener_rankingMEP();
    tbody.innerHTML = ''; 


    for(let i = 0; i < top10escuelas.length; i++){


      let fila = tbody.insertRow();
      let celdaNombrecomercial = fila.insertCell();
      let celdaEscudo = fila.insertCell();
      let celdaRankingmep = fila.insertCell(); 
      let celdaCalifnum = fila.insertCell(); 


      celdaNombrecomercial.innerHTML = top10escuelas[i]['nombrecomercial'];
      celdaEscudo.innerHTML =top10escuelas[i]['escudo'];
      celdaRankingmep.innerHTML = top10escuelas[i]['rankingmep'];
      celdaCalifnum.innerHTML = Number(top10escuelas[i]['califnum']);

      centros.push(celdaNombrecomercial.innerHTML);
      calificaciones.push(celdaCalifnum.innerHTML);
      }

};

function mostrar_top10_colegiosMEP(){
 
  let lista_rankingMep = obtener_rankingMEP();
  let top10centros =[];


  //ordena ascendente
  function sortArrayOfObjects(arrayToSort, key) {
      function compareObjects(a, b) {
          if (a[key] < b[key])
              return -1;
          if (a[key] > b[key])
              return 1;
          return 0;
      }

      return arrayToSort.sort(compareObjects);
  }

  //centros ordenados x calificacion de menor a mayor
  let centrosAscendente = sortArrayOfObjects(lista_rankingMep, 'califnum');

  //centros ordenados x calificacion de mayor a menor
  let centrosDescendente = centrosAscendente.reverse()

  //obtener solo escuelas  MEP
  let secundarias = []  


  for(let i = 0; i < centrosDescendente.length; i++){

    if (centrosDescendente[i]['secundaria'] == true){
        var x=(centrosDescendente[i])
        secundarias.push(x)
       
    }}


  //Obtener solo las mejores 10
  let top10colegios = secundarias.slice(0,10);

    //generar la tabla

    let tbody = document.querySelector('#tbltop10colegios tbody');
    tbody.innerHTML = ''; 


    for(let i = 0; i < top10colegios.length; i++){


      let fila = tbody.insertRow();
      let celdaNombrecomercial = fila.insertCell();
      let celdaEscudo = fila.insertCell();
      let celdaRankingmep = fila.insertCell(); 
      let celdaCalifnum = fila.insertCell(); 


      celdaNombrecomercial.innerHTML = top10colegios[i]['nombrecomercial'];
      celdaEscudo.innerHTML =top10colegios[i]['escudo'];
      celdaRankingmep.innerHTML = top10colegios[i]['rankingmep'];
      celdaCalifnum.innerHTML = Number(top10colegios[i]['califnum']);

      centros2.push(celdaNombrecomercial.innerHTML);
      calificaciones2.push(celdaCalifnum.innerHTML);
      }

};

function mostrar_top10_escPubMEP(){
 
  let lista_rankingMep = obtener_rankingMEP();
  let top10centros =[];


  //ordena ascendente
  function sortArrayOfObjects(arrayToSort, key) {
      function compareObjects(a, b) {
          if (a[key] < b[key])
              return -1;
          if (a[key] > b[key])
              return 1;
          return 0;
      }

      return arrayToSort.sort(compareObjects);
  }

  //centros ordenados x calificacion de menor a mayor
  let centrosAscendente = sortArrayOfObjects(lista_rankingMep, 'califnum');

  //centros ordenados x calificacion de mayor a menor
  let centrosDescendente = centrosAscendente.reverse()

  //obtener solo escuelas  MEP
  let primariaPub = []  


  for(let i = 0; i < centrosDescendente.length; i++){

    if (centrosDescendente[i]['tipodecentro'] == 'Público' && centrosDescendente[i]['primaria'] == true){
        var x=(centrosDescendente[i])
        primariaPub.push(x)
       
    }}


  //Obtener solo las mejores 10
  let top10escuelaPub = primariaPub.slice(0,10);

    //generar la tabla

    let tbody = document.querySelector('#tbltop10escuelasPub tbody');
    tbody.innerHTML = ''; 


    for(let i = 0; i < top10escuelaPub.length; i++){


      let fila = tbody.insertRow();
      let celdaNombrecomercial = fila.insertCell();
      let celdaEscudo = fila.insertCell();
      let celdaRankingmep = fila.insertCell(); 
      let celdaCalifnum = fila.insertCell(); 


      celdaNombrecomercial.innerHTML = top10escuelaPub[i]['nombrecomercial'];
      celdaEscudo.innerHTML =top10escuelaPub[i]['escudo'];
      celdaRankingmep.innerHTML = top10escuelaPub[i]['rankingmep'];
      celdaCalifnum.innerHTML = Number(top10escuelaPub[i]['califnum']);

      centros3.push(celdaNombrecomercial.innerHTML);
      calificaciones3.push(celdaCalifnum.innerHTML);
      }

};

function mostrar_top10_escPriMEP(){
 
  let lista_rankingMep = obtener_rankingMEP();
  let top10centros =[];


  //ordena ascendente
  function sortArrayOfObjects(arrayToSort, key) {
      function compareObjects(a, b) {
          if (a[key] < b[key])
              return -1;
          if (a[key] > b[key])
              return 1;
          return 0;
      }

      return arrayToSort.sort(compareObjects);
  }

  //centros ordenados x calificacion de menor a mayor
  let centrosAscendente = sortArrayOfObjects(lista_rankingMep, 'califnum');

  //centros ordenados x calificacion de mayor a menor
  let centrosDescendente = centrosAscendente.reverse()

  //obtener solo escuelas  MEP
  let primariaPri = []  


  for(let i = 0; i < centrosDescendente.length; i++){

    if (centrosDescendente[i]['tipodecentro'] == 'Privado' && centrosDescendente[i]['primaria'] == true){
        var x=(centrosDescendente[i])
        primariaPri.push(x)
       
    }}


  //Obtener solo las mejores 10
  let top10escuelaPri = primariaPri.slice(0,10);

    //generar la tabla

    let tbody = document.querySelector('#tbltop10escuelasPri tbody');
    tbody.innerHTML = ''; 


    for(let i = 0; i < top10escuelaPri.length; i++){


      let fila = tbody.insertRow();
      let celdaNombrecomercial = fila.insertCell();
      let celdaEscudo = fila.insertCell();
      let celdaRankingmep = fila.insertCell(); 
      let celdaCalifnum = fila.insertCell(); 


      celdaNombrecomercial.innerHTML = top10escuelaPri[i]['nombrecomercial'];
      celdaEscudo.innerHTML =top10escuelaPri[i]['escudo'];
      celdaRankingmep.innerHTML = top10escuelaPri[i]['rankingmep'];
      celdaCalifnum.innerHTML = Number(top10escuelaPri[i]['califnum']);

      centros4.push(celdaNombrecomercial.innerHTML);
      calificaciones4.push(celdaCalifnum.innerHTML);
      }

};

function mostrar_top10_colPubMEP(){
 
  let lista_rankingMep = obtener_rankingMEP();
  let top10centros =[];


  //ordena ascendente
  function sortArrayOfObjects(arrayToSort, key) {
      function compareObjects(a, b) {
          if (a[key] < b[key])
              return -1;
          if (a[key] > b[key])
              return 1;
          return 0;
      }

      return arrayToSort.sort(compareObjects);
  }

  //centros ordenados x calificacion de menor a mayor
  let centrosAscendente = sortArrayOfObjects(lista_rankingMep, 'califnum');

  //centros ordenados x calificacion de mayor a menor
  let centrosDescendente = centrosAscendente.reverse()

  //obtener solo escuelas  MEP
  let secundariaPub = []  


  for(let i = 0; i < centrosDescendente.length; i++){

    if (centrosDescendente[i]['tipodecentro'] == 'Público' && centrosDescendente[i]['secundaria'] == true){
        var x=(centrosDescendente[i])
        secundariaPub.push(x)
       
    }}


  //Obtener solo las mejores 10
  let top10colegioPub = secundariaPub.slice(0,10);

    //generar la tabla

    let tbody = document.querySelector('#tbltop10colesPub tbody');
    tbody.innerHTML = ''; 


    for(let i = 0; i < top10colegioPub.length; i++){


      let fila = tbody.insertRow();
      let celdaNombrecomercial = fila.insertCell();
      let celdaEscudo = fila.insertCell();
      let celdaRankingmep = fila.insertCell(); 
      let celdaCalifnum = fila.insertCell(); 


      celdaNombrecomercial.innerHTML = top10colegioPub[i]['nombrecomercial'];
      celdaEscudo.innerHTML =top10colegioPub[i]['escudo'];
      celdaRankingmep.innerHTML = top10colegioPub[i]['rankingmep'];
      celdaCalifnum.innerHTML = Number(top10colegioPub[i]['califnum']);

      centros5.push(celdaNombrecomercial.innerHTML);
      calificaciones5.push(celdaCalifnum.innerHTML);
      }

};

function mostrar_top10_colPriMEP(){
 
  let lista_rankingMep = obtener_rankingMEP();
  let top10centros =[];


  //ordena ascendente
  function sortArrayOfObjects(arrayToSort, key) {
      function compareObjects(a, b) {
          if (a[key] < b[key])
              return -1;
          if (a[key] > b[key])
              return 1;
          return 0;
      }

      return arrayToSort.sort(compareObjects);
  }

  //centros ordenados x calificacion de menor a mayor
  let centrosAscendente = sortArrayOfObjects(lista_rankingMep, 'califnum');

  //centros ordenados x calificacion de mayor a menor
  let centrosDescendente = centrosAscendente.reverse()

  //obtener solo escuelas  MEP
  let secundariaPri = []  


  for(let i = 0; i < centrosDescendente.length; i++){

    if (centrosDescendente[i]['tipodecentro'] == 'Privado' && centrosDescendente[i]['secundaria'] == true){
        var x=(centrosDescendente[i])
        secundariaPri.push(x)
       
    }}


  //Obtener solo las mejores 10
  let top10colegioPri = secundariaPri.slice(0,10);

    //generar la tabla

    let tbody = document.querySelector('#tbltop10colesPri tbody');
    tbody.innerHTML = ''; 


    for(let i = 0; i < top10colegioPri.length; i++){


      let fila = tbody.insertRow();
      let celdaNombrecomercial = fila.insertCell();
      let celdaEscudo = fila.insertCell();
      let celdaRankingmep = fila.insertCell(); 
      let celdaCalifnum = fila.insertCell(); 


      celdaNombrecomercial.innerHTML = top10colegioPri[i]['nombrecomercial'];
      celdaEscudo.innerHTML =top10colegioPri[i]['escudo'];
      celdaRankingmep.innerHTML = top10colegioPri[i]['rankingmep'];
      celdaCalifnum.innerHTML = Number(top10colegioPri[i]['califnum']);

      centros6.push(celdaNombrecomercial.innerHTML);
      calificaciones6.push(celdaCalifnum.innerHTML);
      }

};




//GRAFICOS

//top 10 escuelas MEP
anychart.onDocumentReady(function() {

    // set the data
    var data = {
        header: ["Centro Educativo", "Calificaciones"],
      rows: [
        [centros[0], calificaciones[0]],
        [centros[1], calificaciones[1]],
        [centros[2], calificaciones[2]],
        [centros[3], calificaciones[3]],
        [centros[4], calificaciones[4]],
        [centros[5], calificaciones[5]],
        [centros[6], calificaciones[6]],
        [centros[7], calificaciones[7]],
        [centros[8], calificaciones[8]],
        [centros[9], calificaciones[9]]

    ]};

    // create the chart
   var chart = anychart.column();
   chart.palette(anychart.palettes.wines);

    // add data
    chart.data(data);

    // set the chart title
    chart.title("10 Mejores Escuelas (MEP)");


  // draw
  chart.container("container");
  chart.draw();
});


//top 10 colegios MEP
anychart.onDocumentReady(function() {

    // set the data
    var data = {
        header: ["Centro Educativo", "Calificaciones"],
      rows: [
        [centros2[0], calificaciones2[0]],
        [centros2[1], calificaciones2[1]],
        [centros2[2], calificaciones2[2]],
        [centros2[3], calificaciones2[3]],
        [centros2[4], calificaciones2[4]],
        [centros2[5], calificaciones2[5]],
        [centros2[6], calificaciones2[6]],
        [centros2[7], calificaciones2[7]],
        [centros2[8], calificaciones2[8]],
        [centros2[9], calificaciones2[9]]

    ]};

    // create the chart
   var chart = anychart.column();
   chart.palette(anychart.palettes.wines);

    // add data
    chart.data(data);

    // set the chart title
    chart.title("10 Mejores Colegios (MEP)");


  // draw
  chart.container("container_2");
  chart.draw();
});


//top 10 escuelas publicas MEP
anychart.onDocumentReady(function() {

    // set the data
    var data = {
        header: ["Centro Educativo", "Calificaciones"],
      rows: [
        [centros3[0], calificaciones3[0]],
        [centros3[1], calificaciones3[1]],
        [centros3[2], calificaciones3[2]],
        [centros3[3], calificaciones3[3]],
        [centros3[4], calificaciones3[4]],
        [centros3[5], calificaciones3[5]],
        [centros3[6], calificaciones3[6]],
        [centros3[7], calificaciones3[7]],
        [centros3[8], calificaciones3[8]],
        [centros3[9], calificaciones3[9]]

    ]};

    // create the chart
   var chart = anychart.column();
   chart.palette(anychart.palettes.wines);

    // add data
    chart.data(data);

    // set the chart title
    chart.title("10 Mejores Escuelas Públicas (MEP)");


  // draw
  chart.container("container_3");
  chart.draw();
});


//top 10 escuelas privados MEP
anychart.onDocumentReady(function() {

    // set the data
    var data = {
        header: ["Centro Educativo", "Calificaciones"],
      rows: [
        [centros4[0], calificaciones4[0]],
        [centros4[1], calificaciones4[1]],
        [centros4[2], calificaciones4[2]],
        [centros4[3], calificaciones4[3]],
        [centros4[4], calificaciones4[4]],
        [centros4[5], calificaciones4[5]],
        [centros4[6], calificaciones4[6]],
        [centros4[7], calificaciones4[7]],
        [centros4[8], calificaciones4[8]],
        [centros4[9], calificaciones4[9]]

    ]};

    // create the chart
   var chart = anychart.column();
   chart.palette(anychart.palettes.wines);

    // add data
    chart.data(data);

    // set the chart title
    chart.title("10 Mejores Escuelas Privadas (MEP)");


  // draw
  chart.container("container_4");
  chart.draw();
});

//top 10 coles publicos MEP
anychart.onDocumentReady(function() {

    // set the data
    var data = {
        header: ["Centro Educativo", "Calificaciones"],
      rows: [
        [centros5[0], calificaciones5[0]],
        [centros5[1], calificaciones5[1]],
        [centros5[2], calificaciones5[2]],
        [centros5[3], calificaciones5[3]],
        [centros5[4], calificaciones5[4]],
        [centros5[5], calificaciones5[5]],
        [centros5[6], calificaciones5[6]],
        [centros5[7], calificaciones5[7]],
        [centros5[8], calificaciones5[8]],
        [centros5[9], calificaciones5[9]]

    ]};

    // create the chart
   var chart = anychart.column();
   chart.palette(anychart.palettes.wines);

    // add data
    chart.data(data);

    // set the chart title
    chart.title("10 Mejores Colegios Públicos (MEP)");


  // draw
  chart.container("container_5");
  chart.draw();
});

//top 10 escuelas privados MEP
anychart.onDocumentReady(function() {

    // set the data
    var data = {
        header: ["Centro Educativo", "Calificaciones"],
      rows: [
        [centros6[0], calificaciones6[0]],
        [centros6[1], calificaciones6[1]],
        [centros6[2], calificaciones6[2]],
        [centros6[3], calificaciones6[3]],
        [centros6[4], calificaciones6[4]],
        [centros6[5], calificaciones6[5]],
        [centros6[6], calificaciones6[6]],
        [centros6[7], calificaciones6[7]],
        [centros6[8], calificaciones6[8]],
        [centros6[9], calificaciones6[9]]

    ]};

    // create the chart
   var chart = anychart.column();
   chart.palette(anychart.palettes.wines);

    // add data
    chart.data(data);

    // set the chart title
    chart.title("10 Mejores Colegios Privados (MEP)");


  // draw
  chart.container("container_6");
  chart.draw();
});