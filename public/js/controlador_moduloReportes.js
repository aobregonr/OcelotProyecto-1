'use strict';


const inputFiltro = document.querySelector('#txtFiltro');
const inputFiltro2 = document.querySelector('#txtFiltro2');

let lista_centros = obtener_lista_usuarios(); //obtener centros educ
let calificaciones=[];
let centros = [];


//ranking Padres de familia y MEP
let lista_rankingPF = obtener_rankingPF();
let lista_ranking = obtener_rankingMEP();

mostrar_rankingPF_promedio();
mostrar_rankingMep();



inputFiltro.addEventListener('keyup', mostrar_rankingMep);


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

      	centros.push(celdaNombrecomercial.innerHTML);
      	calificaciones.push(celdaCalifnum.innerHTML);
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

        //el filtro aun no sirve
        if(key.toLowerCase().includes(filtro2.toLowerCase())) { 
           if (key == centrosInfo.nombrecomercial){

          let fila = tbody.insertRow();

          let celdaCentro = fila.insertCell();
          let celdaEscudo = fila.insertCell();
          let celdaPromedio =  fila.insertCell();

          let imagen = document.createElement('img');
              imagen.classList.add('imagenTabla'); //para definir el tamano de la imagen

              if(centrosInfo.escudo){
                  imagen.src = centrosInfo.escudo;
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
    
          //llenar la tabla con los datos (hacer un condicional para que no se repitan)
         

            celdaCentro.innerHTML = centrosInfo.nombrecomercial;
            celdaEscudo.appendChild(imagen);
            celdaPromedio.innerHTML = promedio;
            celdaEstrellas.innerHTML = promedioStars;
            break;
        }
          
        }
      }}
};

//GRAFICOS

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
   chart.palette(anychart.palettes.default);

    // add data
    chart.data(data);

    // set the chart title
    chart.title("10 mejores Centros Educativos (MEP)");


  // draw
  chart.container("container");
  chart.draw();
});

//----------------------------------------------------//

//ordena los datos de las tablas
function init() {
    var sorter = tsorter.create('tblRankingMEP');
}
    
window.onload = init;

