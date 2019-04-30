'use strict';

let nombre_usuario=sessionStorage.getItem('nombre_usuario');
let apellido_usuario=sessionStorage.getItem('apellido_usuario');
let foto_usuario=sessionStorage.getItem('foto_usuario');
let provincia_usuario=sessionStorage.getItem('provincia');
let img=document.querySelector('#fotoUs');
img.setAttribute("src", foto_usuario);
let h2Nombre= document.querySelector('#username');
h2Nombre.innerHTML=nombre_usuario+" "+apellido_usuario;
let listaCen=obtener_lista_centros();
let i;
let j;
let listaResul=[];
let varFilter=[];
varFilter[0]=provincia_usuario.toLowerCase();
    
//____________________________________________________________________________________________________________
const boton= document.querySelector('#btnSearch');
boton.addEventListener('click' , ShowData);
ShowData();


let listaCitas = listarCitas();


mostrar_citas();





function ShowData(){
    listaCen=obtener_lista_centros();
    listaResul=[];  
  


        for (j=0; j < varFilter.length; j++){

         varFilter[j]=varFilter[j].toLowerCase();
            
        let count=0;
            
            for(i = 0; i <listaCen.length; i++){
                  
              if ((listaCen[i]['provincia'].toLowerCase().includes(varFilter[j]))&&(listaCen[i]['tipo']=='CentroEducativo')){
               
                                    if (  //si es secundaria privada
                                        (listaCen[i]['tipo'] == 'CentroEducativo' &&
                                         listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                         listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked &&
                                         document.getElementById("cbDefault").checked == true)&&  !document.getElementById("cbBilingue").checked &&
                                         !document.getElementById("cbTecnico").checked &&
                                         !document.getElementById("cbReligioso").checked &&
                                         !document.getElementById("cbNoReligioso").checked &&
                                         !document.getElementById("cbVocacional").checked &&
                                         !document.getElementById("cbIdiomas").checked &&
                                         !document.getElementById("cbBecas").checked &&
                                         !document.getElementById("cbBachilleratoInternacional").checked &&
                                         !document.getElementById("cbMixto").checked &&
                                         !document.getElementById("cbVarones").checked &&
                                         !document.getElementById("cbMujeres").checked ||
                                         //si es secundaria publica
                                        ((listaCen[i]['tipo'] == 'CentroEducativo' )&&
                                        (listaCen[i]['secundaria'] == true) && (document.getElementById("cbSecundaria").checked )&&
                                        (listaCen[i]['tipodecentro'] == 'Público') && (document.getElementById("cbPublico").checked) &&
                                        (document.getElementById("cbDefault").checked) == true)&&  !document.getElementById("cbBilingue").checked &&
                                        !document.getElementById("cbTecnico").checked &&
                                        !document.getElementById("cbReligioso").checked &&
                                        !document.getElementById("cbNoReligioso").checked &&
                                        !document.getElementById("cbVocacional").checked &&
                                        !document.getElementById("cbIdiomas").checked &&
                                        !document.getElementById("cbBecas").checked &&
                                        !document.getElementById("cbBachilleratoInternacional").checked &&
                                        !document.getElementById("cbMixto").checked &&
                                        !document.getElementById("cbVarones").checked &&
                                        !document.getElementById("cbMujeres").checked||
                                         // si es primaria privada
                                        (listaCen[i]['tipo'] == 'CentroEducativo' &&
                                        listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked &&
                                        document.getElementById("cbDefault").checked == true)&&  !document.getElementById("cbBilingue").checked &&
                                        !document.getElementById("cbTecnico").checked &&
                                        !document.getElementById("cbReligioso").checked &&
                                        !document.getElementById("cbNoReligioso").checked &&
                                        !document.getElementById("cbVocacional").checked &&
                                        !document.getElementById("cbIdiomas").checked &&
                                        !document.getElementById("cbBecas").checked &&
                                        !document.getElementById("cbBachilleratoInternacional").checked &&
                                        !document.getElementById("cbMixto").checked &&
                                        !document.getElementById("cbVarones").checked &&
                                        !document.getElementById("cbMujeres").checked||
                                        // si es primaria publica
                                        (listaCen[i]['tipo'] == 'CentroEducativo' &&
                                        listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked &&
                                        document.getElementById("cbDefault").checked == true)&&  !document.getElementById("cbBilingue").checked &&
                                        !document.getElementById("cbTecnico").checked &&
                                        !document.getElementById("cbReligioso").checked &&
                                        !document.getElementById("cbNoReligioso").checked &&
                                        !document.getElementById("cbVocacional").checked &&
                                        !document.getElementById("cbIdiomas").checked &&
                                        !document.getElementById("cbBecas").checked &&
                                        !document.getElementById("cbBachilleratoInternacional").checked &&
                                        !document.getElementById("cbMixto").checked &&
                                        !document.getElementById("cbVarones").checked &&
                                        !document.getElementById("cbMujeres").checked||
                                        //si es secundaria publica bilingue
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked &&  
                                        listaCen[i]['bilingue'] == true && document.getElementById("cbBilingue").checked)||
                                       //si es secundaria publica bilingue
                                       (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked &&  
                                        listaCen[i]['bilingue'] == true && document.getElementById("cbBilingue").checked) ||
                                       // si es primaria privada bilingue
                                       (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked && 
                                        listaCen[i]['bilingue'] == true && document.getElementById("cbBilingue").checked) || 
                                       // si es primaria publica bilingue
                                       (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked && 
                                        listaCen[i]['bilingue'] == true && document.getElementById("cbBilingue").checked)||
                                         //si es secundaria privada tecnico
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked &&  
                                        listaCen[i]['tecnico'] == true && document.getElementById("cbTecnico").checked) ||
                                         //si es secundaria publica tecnico
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked &&  
                                        listaCen[i]['tecnico'] == true && document.getElementById("cbTecnico").checked) ||
                                          // si es primaria privada tecnico
                                         (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked && 
                                        listaCen[i]['tecnico'] == true && document.getElementById("cbTecnico").checked) || 
                                        // si es primaria publica tecnico
                                         (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked && 
                                        listaCen[i]['tecnico'] == true && document.getElementById("cbTecnico").checked)||
                                        //si es secundaria privada religioso
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked &&  
                                        listaCen[i]['religioso'] == true && document.getElementById("cbReligioso").checked) ||
                                         //si es secundaria publica religioso
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked &&  
                                        listaCen[i]['religioso'] == true && document.getElementById("cbReligioso").checked) ||
                                         // si es primaria privada religioso
                                        (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked && 
                                        listaCen[i]['religioso'] == true && document.getElementById("cbReligioso").checked) || 
                                         // si es primaria publica religioso
                                         (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked && 
                                        listaCen[i]['religioso'] == true && document.getElementById("cbReligioso").checked) ||
                                        //si es secundaria privada noReligioso
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked &&  
                                        listaCen[i]['noreligioso'] == true && document.getElementById("cbNoReligioso").checked) ||
                                         //si es secundaria publica noReligioso
                                         (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked &&  
                                        listaCen[i]['noreligioso'] == true && document.getElementById("cbNoReligioso").checked) ||
                                         // si es primaria privada noReligioso
                                         (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked && 
                                        listaCen[i]['noreligioso'] == true && document.getElementById("cbNoReligioso").checked) || 
                                         // si es primaria publica noReligioso
                                        (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked && 
                                        listaCen[i]['noreligioso'] == true && document.getElementById("cbNoReligioso").checked)||
                                         //si es secundaria privada vocacional
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked &&  
                                        listaCen[i]['vocacional'] == true && document.getElementById("cbVocacional").checked) ||
                                           //si es secundaria publica vocacional
                                       (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked &&  
                                        listaCen[i]['vocacional'] == true && document.getElementById("cbVocacional").checked) ||
                                         // si es primaria privada vocacional
                                         (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked && 
                                        listaCen[i]['vocacional'] == true && document.getElementById("cbVocacional").checked) || 
                                           // si es primaria publica vocacional
                                          (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked && 
                                        listaCen[i]['vocacional'] == true && document.getElementById("cbVocacional").checked)||
                                        //si es secundaria privada idiomas
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked &&  
                                        listaCen[i]['idiomas'] == true && document.getElementById("cbIdiomas").checked) ||
                                        //si es secundaria publica idiomas
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked &&  
                                        listaCen[i]['idiomas'] == true && document.getElementById("cbIdiomas").checked) ||
                                        // si es primaria privada idiomas
                                        (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked && 
                                        listaCen[i]['idiomas'] == true && document.getElementById("cbIdiomas").checked) || 
                                        // si es primaria publica idiomas
                                        (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked && 
                                        listaCen[i]['idiomas'] == true && document.getElementById("cbIdiomas").checked)||
                                        //si es secundaria privada becas
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked &&  
                                        listaCen[i]['becas'] == true && document.getElementById("cbBecas").checked) ||
                                        //si es secundaria publica becas
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked &&  
                                        listaCen[i]['becas'] == true && document.getElementById("cbBecas").checked) ||
                                        // si es primaria privada becas
                                        (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked && 
                                        listaCen[i]['becas'] == true && document.getElementById("cbBecas").checked) || 
                                        // si es primaria publica becas
                                        (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked && 
                                        listaCen[i]['becas'] == true && document.getElementById("cbBecas").checked)||
                                         //si es secundaria privada bachilleratoInt
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked &&  
                                        listaCen[i]['bachilleratoint'] == true && document.getElementById("cbBachilleratoInternacional").checked) ||
                                        //si es secundaria publica bachilleratoInt
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked &&  
                                        listaCen[i]['bachilleratoint'] == true && document.getElementById("cbBachilleratoInternacional").checked) ||
                                        // si es primaria privada bachilleratoInt
                                        (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked && 
                                        listaCen[i]['bachilleratoint'] == true && document.getElementById("cbBachilleratoInternacional").checked) || 
                                        // si es primaria publica bachilleratoInt
                                        (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked && 
                                        listaCen[i]['bachilleratoint'] == true && document.getElementById("cbBachilleratoInternacional").checked)||
                                        //si es secundaria privada mixto
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked &&  
                                        listaCen[i]['mixto'] == true && document.getElementById("cbMixto").checked) ||
                                        //si es secundaria publica mixto
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked &&  
                                         listaCen[i]['mixto'] == true && document.getElementById("cbMixto").checked) ||
                                        // si es primaria privada mixto
                                        (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked && 
                                        listaCen[i]['mixto'] == true && document.getElementById("cbMixto").checked) || 
                                        // si es primaria publica mixto
                                        (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                         listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked && 
                                        listaCen[i]['mixto'] == true && document.getElementById("cbMixto").checked)||
                                        //si es secundaria privada varones
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked &&  
                                        listaCen[i]['varones'] == true && document.getElementById("cbVarones").checked) ||
                                        //si es secundaria publica varones
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked &&  
                                        listaCen[i]['varones'] == true && document.getElementById("cbVarones").checked) ||
                                        // si es primaria privada varones
                                        (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked && 
                                        listaCen[i]['varones'] == true && document.getElementById("cbVarones").checked) || 
                                        // si es primaria publica varones
                                        (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked && 
                                        listaCen[i]['varones'] == true && document.getElementById("cbVarones").checked)||
                                        //si es secundaria privada mujeres
                                        (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked &&  
                                        listaCen[i]['mujeres'] == true && document.getElementById("cbMujeres").checked) ||
                                             //si es secundaria publica mujeres
                                         (listaCen[i]['secundaria'] == true && document.getElementById("cbSecundaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked &&  
                                        listaCen[i]['mujeres'] == true && document.getElementById("cbMujeres").checked) ||
                                        // si es primaria privada mujeres
                                        (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Privado' && document.getElementById("cbPrivado").checked && 
                                        listaCen[i]['mujeres'] == true && document.getElementById("cbMujeres").checked) || 
                                        // si es primaria publica mujeres
                                        (listaCen[i]['primaria'] == true && document.getElementById("cbPrimaria").checked &&
                                        listaCen[i]['tipodecentro'] == 'Público' && document.getElementById("cbPublico").checked && 
                                        listaCen[i]['mujeres'] == true && document.getElementById("cbMujeres").checked)
                                         ){
                    
                                    listaResul[count]=listaCen[i];
                                    count++;

                                    
                                    };
                                    
                                   
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
         
         console.log(listaCen);
// se setea listaResult a cero para la nueva valoracion

          listaResul=[];   
    };
   
//___________________________________________________________________________________________________________

let tbody = document.querySelector('#tblCentros tbody');
tbody.innerHTML = '';
let fila = tbody.insertRow();


let celdaTipo = fila.insertCell();
let celdaNombrecomercial = fila.insertCell();
let celdaCedulajuridica = fila.insertCell(); 
let celdaTipodecentro = fila.insertCell(); 
let celdaTelefonoctro = fila.insertCell(); 
let celdaFax = fila.insertCell(); 
let celdaSitioweb = fila.insertCell();
let celdaFacebook = fila.insertCell();
let celdaEmailinstit = fila.insertCell();        
let celdaDireccionexacta = fila.insertCell(); 
let celdaAnofund = fila.insertCell(); 
let celdaRefhist = fila.insertCell(); 
let celdaDepartamento = fila.insertCell(); 
let celdaExt = fila.insertCell(); 
let celdaEscudo = fila.insertCell();
let celdaFoto = fila.insertCell(); 
let celdaBilingue = fila.insertCell();
let celdaTecnico = fila.insertCell(); 
let celdaReligioso = fila.insertCell();
let celdaNoreligioso = fila.insertCell();
let celdaVocacional = fila.insertCell();
let celdaIdiomas = fila.insertCell();
let celdaBecas = fila.insertCell();
let celdaBachilleratoint = fila.insertCell(); 
let celdaMixto = fila.insertCell(); 
let celdaVarones = fila.insertCell(); 
let celdaMujeres = fila.insertCell(); 
let celdaPrimaria = fila.insertCell(); 
let celdaSecundaria = fila.insertCell(); 

let clearCard=document.querySelector("#cards");
    clearCard.innerHTML="";
// for para recorrer la listaCen ya depurada por el filtro
for(let i = 0; i < listaCen.length; i++){

    

    //______________________________tabla de datos ___________________________________
    
    
    
        celdaTipo.innerHTML = listaCen[i]['tipo'];
        celdaNombrecomercial.innerHTML = listaCen[i]['nombrecomercial'];
        celdaCedulajuridica.innerHTML = listaCen[i]['cedulajuridica'];
        celdaTipodecentro.innerHTML = listaCen[i]['tipodecentro'];
        celdaTelefonoctro.innerHTML = listaCen[i]['telefonoctro'];
        celdaFax.innerHTML = listaCen[i]['fax'];
        celdaSitioweb.innerHTML = listaCen[i]['sitioweb'];
        celdaFacebook.innerHTML = listaCen[i]['facebook'];
        celdaEmailinstit.innerHTML = listaCen[i]['emailinstit'];
        celdaDireccionexacta.innerHTML = listaCen[i]['direccionexacta'];
        celdaAnofund.innerHTML = listaCen[i]['anofund'];
        celdaRefhist.innerHTML = listaCen[i]['refhist'];
        celdaDepartamento.innerHTML = listaCen[i]['departamento'];
        celdaExt.innerHTML = listaCen[i]['ext'];
        let imagen = document.createElement('img');
        imagen.classList.add('imagenTabla'); //para definir el tamano de la imagen
    
        if(listaCen[i]['escudo']){
            imagen.src = listaCen[i]['escudo'];
        }else{
            imagen.src = 'imgs/escudo.png';
        }
    
        celdaEscudo.appendChild(imagen);
    
        let foto = document.createElement('img');
        foto.classList.add('imagenTabla'); //para definir el tamano de la imagen
    
        if(listaCen[i]['foto']){
            foto.src = listaCen[i]['foto'];
        }else{
            foto.src = 'imgs/user.png';
        }
    
        celdaFoto.appendChild(foto);
        celdaBilingue.innerHTML = listaCen[i]['bilingue'];
        celdaTecnico.innerHTML = listaCen[i]['tecnico'];
        celdaReligioso.innerHTML = listaCen[i]['religioso'];
        celdaNoreligioso.innerHTML = listaCen[i]['noreligioso'];
        celdaVocacional.innerHTML = listaCen[i]['vocacional'];
        celdaIdiomas.innerHTML = listaCen[i]['idiomas'];
        celdaBecas.innerHTML = listaCen[i]['becas'];
        celdaBachilleratoint.innerHTML = listaCen[i]['bachilleratoint'];
        celdaMixto.innerHTML = listaCen[i]['mixto'];
        celdaVarones.innerHTML = listaCen[i]['varones'];
        celdaMujeres.innerHTML = listaCen[i]['mujeres'];
        celdaPrimaria.innerHTML = listaCen[i]['primaria'];
        celdaSecundaria.innerHTML = listaCen[i]['secundaria'];
    
    
     if( 
        listaCen[i]['tipo'] == 'CentroEducativo'){
    
            
    let dato1=(listaCen[i]['_id']);
    let dir="perfilCentroEduc.html?b="+dato1;
        /*metodo para la creacion de cada card para mostrar los resultados de la busqueda
        nota: usar un for para realizarlos de manera automatica y de una vez agregar los datos basicos
        la ref. los llevaria a cada centro educativo buscado.*/
    
        var midiv = document.createElement("div");
        midiv.setAttribute("id","card"+i);
        midiv.setAttribute("class","cardColor");
        var midiv2 = document.createElement("div");
        midiv2.setAttribute("class","card-body text-center");
        var midiv4 = document.createElement("a");
        midiv4.setAttribute("id","txtEnl"+i);
        midiv4.setAttribute("class","schoolCard");
        midiv4.setAttribute("href",dir);
       
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
    
    
        //generar todas las cards pero esconderlas por defecto
        midiv.style.visibility = "visible";
        midiv.style.display = "block";

};
};
};

function mostrar_citas(){


     let tbody = document.querySelector('#tblCitas tbody');
     tbody.innerHTML = '';

      for (let i = 0; i < listaCitas.length; i++) {

        //obtener el padre de familia actual:
        let padreActual = obtener_usuario_por_id( listaCitas[i]['identPadresFamilia']);
        let centroData = obtener_usuario_por_id(listaCitas[i]['identCentroEducativo']);


        console.log(nombre_usuario);
        console.log(padreActual.nombre);
        console.log(centroData.nombrecomercial);


        //si el padre de la cita coincide con el inicio de sesion, mostrar cita
        if (padreActual.nombre == nombre_usuario){


          let fila = tbody.insertRow();

          let celdaFecha = fila.insertCell();
          let celdaHora = fila.insertCell();
          let celdaCentro = fila.insertCell();
          let celdaDescripcion = fila.insertCell();

          //
          celdaFecha.innerHTML = listaCitas[i]['fecha'];
          celdaHora.innerHTML = listaCitas[i]['hora'];
          celdaCentro.innerHTML = centroData.nombrecomercial;
          celdaDescripcion.innerHTML = listaCitas[i]['descripcion'];
        }
    }
}