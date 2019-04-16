'use strict';


let listaCen=obtener_lista_usuarios();
let i;
let j;
let listaResul=[];

 //____________________________________________________________________________________________________________
    /* metodo para leer los datos colectados en el formulario de home.html
    se envian atravez de la direccion mediante un get*/

    var url = window.location.href;
    var b = url.substring(url.indexOf("=")+1);
    let a=b.split(",");
    let filter=a[0];
    let nivel=a[1];
    let varNivel;
    let varFilter=[];
    console.log(filter);
    varFilter=a[0].split("%20");
    console.log(varFilter);

//____________________________________________________________________________________________________________

ShowData();



function ShowData(){

  
// for para evaluar cada palabra ingresada en la busqueda del home

        for (j=0; j < varFilter.length; j++){


            varFilter[j]=varFilter[j].toLowerCase();
            
            let count=0;
            
            
// for para recorrer toda la lista de centros y evaluar palabra por palabra del for anterior
// y almacenar los resultados correctos en arreglo listaResul

            for(i = 0; i <listaCen.length; i++){
             
              if (listaCen[i]['nombrecomercial'].toLowerCase().includes(varFilter[j])){
                listaResul[count]=listaCen[i];
                count++;
              };
              if (listaCen[i]['tipodecentro'].toLowerCase().includes(varFilter[j])){
                listaResul[count]=listaCen[i];
                count++;
              };
              if (listaCen[i]['provincia'].toLowerCase().includes(varFilter[j])){
                listaResul[count]=listaCen[i];
                count++;
              };
              if (listaCen[i]['direccionexacta'].toLowerCase().includes(varFilter[j])){
                listaResul[count]=listaCen[i];
                count++;
              };
           
          };
         
// si listaResul no tiene valores almacenados osea no hubieron coincidencias se mantiene listaCen
// para la evaluacion de la siguiente palabra sino se reemplaza listaCen por ListaResult
// reduciendo asi las posibilidades

         if (listaResul.length==0){
            listaCen=listaCen;
         }else{
            listaCen=listaResul;
         };
         
         
// se setea listaResult a cero para la nueva valoracion

          listaResul=[];   
    };
   
//___________________________________________________________________________________________________________


// for para recorrer la listaCen ya depurada por el filtro

    for(i = 0; i <listaCen.length; i++){

//__________________________________________________________________________________________________________
        
            /*metodo para la creacion de cada card para mostrar los resultados de la busqueda
              nota: usar un for para realizarlos de manera automatica y de una vez agregar los datos basicos
              la ref. los llevaria a cada centro educativo buscado.*/

             let tcards = document.querySelector('#cards');
              // tcards.innerHTML = '';
              
               var midiv = document.createElement("div");
               midiv.setAttribute("id","card"+i);
               midiv.setAttribute("class","card cardColor");
               var midiv2 = document.createElement("div");
               midiv2.setAttribute("class","card-body text-center");
               var midiv4 = document.createElement("a");
               midiv4.setAttribute("id","txtEnl"+i);
               midiv4.setAttribute("class","schoolCard");
               midiv4.setAttribute("href","perfilCentroEduc.html");
              
               var imagen2 = document.createElement('img');
               imagen2.setAttribute("id","imgBus"+i);
               imagen2.classList.add('schoolPic');
                   if(listaCen[i]['escudo']){
                       imagen2.src = listaCen[i]['escudo'];
                   }else{
                       imagen2.src = 'imgs/escudo.png';
                   }
               var midiv3 = document.createElement("p");
               midiv3.setAttribute("id","txtNameCen"+i);
               midiv3.setAttribute("class","card-text");
               midiv3.innerHTML = listaCen[i]['nombrecomercial'];
               document.querySelector("#cards").appendChild(midiv);
               document.querySelector("#card"+i).appendChild(midiv2);
               document.querySelector("#card"+i).appendChild(midiv4);
               document.querySelector("#txtEnl"+i).appendChild(imagen2);
               document.querySelector("#card"+i).appendChild(midiv3);
   
//________________________________________________________________________________________________________
          //tabla oculta con resultados     
        
               let tbody = document.querySelector('#tblCentros tbody');
               tbody.innerHTML = '';
               let fila = tbody.insertRow();
   
            
   
               let celdaNombreComercial = fila.insertCell();
               let celdaTipodeCentro = fila.insertCell();
               let celdaTelefonoCtro = fila.insertCell();
               let celdaFax = fila.insertCell();
               let celdaSitioWeb = fila.insertCell();
               let celdaFacebook = fila.insertCell();
               let celdaEmailInstit = fila.insertCell();
               let celdaAnoFund = fila.insertCell();
               let celdaDireccionExacta= fila.insertCell();
               let celdaEscudo = fila.insertCell();
               
               celdaNombreComercial.innerHTML = listaCen[i]['nombrecomercial'];
               celdaTipodeCentro.innerHTML = listaCen[i]['tipodecentro'];
               celdaTelefonoCtro.innerHTML = listaCen[i]['telefonoctro'];
               celdaFax.innerHTML = listaCen[i]['fax'];
               celdaSitioWeb.innerHTML = listaCen[i]['sitioweb'];
               celdaFacebook.innerHTML = listaCen[i]['facebook'];
               celdaEmailInstit.innerHTML = listaCen[i]['emailinstit'];
               celdaAnoFund.innerHTML = listaCen[i]['anofund'];
               celdaDireccionExacta.innerHTML = listaCen[i]['direccionexacta'];
               
   
               let imagen = document.createElement('img');
                   imagen.classList.add('imagenTabla'); 
   
                   if(listaCen[i]['escudo']){
                       imagen.src = listaCen[i]['escudo'];
                   }else{
                       imagen.src = 'imgs/escudo.png';
                   }
   
                   celdaEscudo.appendChild(imagen);  
                };

};

     