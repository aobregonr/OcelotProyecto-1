'use strict';

const select_provincias = document.querySelector('#txtProvincia');
const select_cantones = document.querySelector('#txtCanton');
const select_distritos = document.querySelector('#txtDistrito');


let llenar_provincias = () =>{
    
    for(let i = 0; i < provincias.length; i++){
        let nuevaOpcion = new Option(provincias[i]['nombre']);
        nuevaOpcion.value = provincias[i]['idProvincia'];
        select_provincias.appendChild(nuevaOpcion);
    }
};

let llenar_cantones = () =>{
    let provincia = select_provincias.value;
    select_cantones.innerHTML = '';
    
    for(let i = 0; i < cantones.length; i++){
        if(provincia == cantones[i]['Provincia_idProvincia']){
            let nuevaOpcion = new Option(cantones[i]['nombre']);
            nuevaOpcion.value = cantones[i]['idCanton'];
            select_cantones.appendChild(nuevaOpcion);
        }  
    }
};

let llenar_distritos = () =>{
    let canton = select_cantones.value;
    select_distritos.innerHTML = '';
    
    for(let i = 0; i < distritos.length; i++){
        if(canton == distritos[i]['Canton_idCanton']){
        let nuevaOpcion = new Option(distritos[i]['nombre']);
        nuevaOpcion.value = distritos[i]['nombre'];
        select_distritos.appendChild(nuevaOpcion);
        }
    }
};



select_provincias.addEventListener('change', llenar_cantones);
select_cantones.addEventListener('change', llenar_distritos);

llenar_provincias();
