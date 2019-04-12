'use strict';

let varFilter=[];
let varFilter1=[];
let varFilter2=[];
let varFilter3=[];
let nivel1='primaria';
let nivel2='secundaria';



let section='#collapseOne';
let section2='#collapseTwo';
let section3='#collapseThree';
let section4='#collapseFour';


varFilter[0]='Escuela';
varFilter[1]='publico';
varFilter1[0]='Escuela';
varFilter1[1]='privado';
varFilter3[0]='Colegio';
varFilter3[1]='privado';
varFilter2[0]='Colegio';
varFilter2[1]='publico';




ShowData(varFilter,section,1,nivel1);
ShowData(varFilter1,section2,2,nivel1);
ShowData(varFilter2,section3,3,nivel2);
ShowData(varFilter3,section4,4,nivel2);


function ShowData(pvarFilter,psection,pUbic,pnivel){

    let listaCen=[];
    let listaResul=[];
    listaCen=obtener_lista_centros();
    
 
    for (let j=0; j < pvarFilter.length; j++){


        pvarFilter[j]=pvarFilter[j].toLowerCase();
            
                let count=0;
                
                
    // for para recorrer toda la lista de centros y evaluar palabra por palabra del for anterior
    // y almacenar los resultados correctos en arreglo listaResul
    
                for(let i = 0; i <listaCen.length; i++){
                 
                  if ((listaCen[i]['nombreComercial'].toLowerCase().includes(pvarFilter[j]) || (listaCen[i][pnivel]) )&& (listaCen[i]['tipoDeCentro'].toLowerCase().includes(pvarFilter[j]))){
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
        
       // console.log(listaCen);
    };
    //___________________________________________________________________________________________________________
    
    
    // for para recorrer la listaCen ya depurada por el filtro
    
        for(let i = 0; i <listaCen.length; i++){
    
    //__________________________________________________________________________________________________________
            
                /*metodo para la creacion de cada card para mostrar los resultados de la busqueda
                  nota: usar un for para realizarlos de manera automatica y de una vez agregar los datos basicos
                  la ref. los llevaria a cada centro educativo buscado.*/
    
                 let tcards = document.querySelector(psection);
                  // tcards.innerHTML = '';
                  
                   var midiv = document.createElement("div");
                   midiv.setAttribute("id","card"+i+pUbic);
                   midiv.setAttribute("class","card schoolCards");
                   var midiv2 = document.createElement("div");
                   midiv2.setAttribute("id","card2"+i+pUbic);
                   midiv2.setAttribute("class","card-body text-center");
                   var midiv4 = document.createElement("a");
                   midiv4.setAttribute("id","txtEnl"+i+pUbic);
                   midiv4.setAttribute("class","schoolCard");
                   midiv4.setAttribute("href","#");
                  
                   var imagen2 = document.createElement('img');
                   imagen2.setAttribute("id","imgBus"+i+pUbic);
                   imagen2.classList.add('schoolPic');
                   imagen2.setAttribute("alt","Card image");
                   imagen2.setAttribute("style","with:100%");
                       if(listaCen[i]['escudo']){
                           imagen2.src = listaCen[i]['escudo'];
                       }else{
                           imagen2.src = 'imgs/escudo.png';
                       }
                   var midiv3 = document.createElement("p");
                   midiv3.setAttribute("id","txtNameCen"+i+pUbic);
                   midiv3.setAttribute("class","card-text");
                   midiv3.innerHTML = listaCen[i]['nombreComercial'];
                   document.querySelector(psection).appendChild(midiv);
                   document.querySelector("#card"+i+pUbic).appendChild(midiv2);
                   document.querySelector("#card2"+i+pUbic).appendChild(midiv4);
                   document.querySelector("#txtEnl"+i+pUbic).appendChild(imagen2);
                   document.querySelector("#card"+i+pUbic).appendChild(midiv3);

            };
        };