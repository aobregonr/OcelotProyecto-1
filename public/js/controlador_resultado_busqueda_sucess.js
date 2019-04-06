'use strict';


let listaCen=obtener_lista_centros();
ShowData();


function ShowData(){

    //____________________________________________________________________________________________________________
    /* metodo para leer los datos colectados en el formulario de home.html
    se envian atravez de la direccion mediante un get*/

    var url = window.location.href;
    var b = url.substring(url.indexOf("=")+1);
    let a=b.split(",");
    let filter=a[0];
    let nivel=a[1];

    for(let i = 0; i < listaCen.length; i++){


       if(listaCen[i]['nombreComercial'].toLowerCase().includes(filter.toLowerCase()) ||
         listaCen[i]['nombreComercial'].toLowerCase().includes(nivel)){

            //__________________________________________________________________________________________________________
        
            /*metodo para la creacion de cada card para mostrar los resultados de la busqueda
              nota: usar un for para realizarlos de manera automatica y de una vez agregar los datos basicos
              la ref. los llevaria a cada centro educativo buscado.*/

            var midiv = document.createElement("div");
            midiv.setAttribute("id","card"+i);
            midiv.setAttribute("class","card cardColor");
            var midiv2 = document.createElement("div");
            midiv2.setAttribute("class","card-body text-center");
            var midiv4 = document.createElement("a");
            midiv4.setAttribute("id","txtEnl"+i);
            midiv4.setAttribute("class","schoolCard");
            midiv4.setAttribute("href","#");
           
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
            midiv3.innerHTML = listaCen[i]['nombreComercial'];
            document.querySelector("#cards").appendChild(midiv);
            document.querySelector("#card"+i).appendChild(midiv2);
            document.querySelector("#card"+i).appendChild(midiv4);
            document.querySelector("#txtEnl"+i).appendChild(imagen2);
            document.querySelector("#card"+i).appendChild(midiv3);

            //_________________________________________________________________
            
     
            let tbody = document.querySelector('#tblCentros tbody');
            //tbody.innerHTML = '';
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
    		
    		celdaNombreComercial.innerHTML = listaCen[i]['nombreComercial'];
    		celdaTipodeCentro.innerHTML = listaCen[i]['tipoDeCentro'];
    		celdaTelefonoCtro.innerHTML = listaCen[i]['telefonoCtro'];
    		celdaFax.innerHTML = listaCen[i]['fax'];
    		celdaSitioWeb.innerHTML = listaCen[i]['sitioWeb'];
    		celdaFacebook.innerHTML = listaCen[i]['facebook'];
    		celdaEmailInstit.innerHTML = listaCen[i]['emailInstit'];
    		celdaAnoFund.innerHTML = listaCen[i]['anoFund'];
    		celdaDireccionExacta.innerHTML = listaCen[i]['direccionExacta'];
    		

    		let imagen = document.createElement('img');
                imagen.classList.add('imagenTabla'); //para definir el tamano de la imagen

                if(listaCen[i]['escudo']){
                    imagen.src = listaCen[i]['escudo'];
                }else{
                    imagen.src = 'imgs/escudo.png';
                }

                celdaEscudo.appendChild(imagen);   
        };
    };

        
    };        