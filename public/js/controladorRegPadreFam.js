'use strict';



let botonRegistar = document.querySelector('#btnRegistrarPadreFam');
let inputNombre = document.querySelector('#txtNombre');
let inputApellido = document.querySelector('#txtApellido');
let inputIdentificación = document.querySelector('#txtNoIdentificación');
let inputCorreoElectrónico = document.querySelector('#txtEmail');
let inputContraseña = document.querySelector('#txtPassword');
let inputConfirmarContraseña = document.querySelector('#txtPasswordConf');
let inputSegundoNombre = document.querySelector('#txtNombre2');
let inputSegundoApellido = document.querySelector('#txtApellido2');
let inputNacionalidad = document.querySelector('#txtNacionalidad');
let inputNúmeroTeléfono = document.querySelector('#txtTeléfono');
let inputProvincia = document.querySelector('#txtProvincia');
let inputCantón = document.querySelector('#txtCantón');
let inputDistrito = document.querySelector('#txtDistrito');
let inputCantidadDeHijos = document.querySelector('#txtCantHijos');
let inputAñoDeNacimiento = document.querySelector('#txtAñoDeNacimiento');


imprimir_lista_PadresDeFamilia();  // Imprime por defecto al cargarse el archivo.


botonRegistar.addEventListener('click', obtenerDatosPadres);

function obtenerDatosPadres(){
    let sNombre = inputNombre.value;
    let sApellido = inputApellido.value;
    let sIdentificación = inputIdentificación.value;
    let sCorreoElectrónico = inputCorreoElectrónico.value;
    let sContraseña = inputContraseña.value;
    let sConfirmarContraseña = inputConfirmarContraseña.value;
    let sSegundoNombre = inputSegundoNombre.value;
    let sSegundoApellido = inputSegundoApellido.value;
    let sNacionalidad = inputNacionalidad.value;
    let nNúmeroTeléfono = Number(inputNúmeroTeléfono.value);
    let sProvincia = inputProvincia.value;
    let sCantón = inputCantón.value;
    let sDistrito = inputDistrito.value;
    let nCantidadDeHijos = Number(inputCantidadDeHijos.value);
    let nAñoDeNacimiento = Number(inputAñoDeNacimiento.value);
    
registrar_PadreDeFam(sNombre, sApellido, sIdentificación, sCorreoElectrónico, sContraseña, sConfirmarContraseña, sSegundoNombre, sSegundoApellido, sNacionalidad, nNúmeroTeléfono, sProvincia, sCantón, sDistrito, nCantidadDeHijos, nAñoDeNacimiento);
imprimir_lista_PadresDeFamilia();   // Refresca la pagina con la ultima lista de Padres.

};

// Funcion que mostrará los datos dentro de la tabla de Padres de Familia.
function imprimir_lista_PadresDeFamilia() {  
    let tbody = document.querySelector('#tblPadresDeFam tbody');
    let lista_PadresDeFamilia = obtener_lista_padresDeFam();



    tbody.innerHTML = '';  //asegura que la tabla está vacía antes de imprimir y evtita duplicados

    for (let i = 0; i < lista_PadresDeFamilia.length; i++) {
        let fila = tbody.insertRow();

        let celdaNombre = fila.insertCell();
        let celdaApellido = fila.insertCell();
        let celdaIdentificación = fila.insertCell();
        let celdaCorreoElectrónico = fila.insertCell();
        let celdasContraseña = fila.insertCell();
        let celdaConfirmarContraseña = fila.insertCell();
        let celdaSegundoNombre = fila.insertCell();
        let celdaSegundoApellido = fila.insertCell();
        let celdaNacionalidad = fila.insertCell();
        let celdaNúmeroTeléfono = fila.insertCell();
        let celdaProvincia = fila.insertCell();
        let celdaCantón = fila.insertCell();
        let celdaDistrito = fila.insertCell();
        let celdaCantidadDeHijos = fila.insertCell();
        let celdaAñoDeNacimiento = fila.insertCell();

        /** 
         *usamos innerHTML para agregar contenido a cada celda. 
        */
        celdaNombre.innerHTML = lista_PadresDeFamilia[i][0];
        celdaApellido.innerHTML = lista_PadresDeFamilia[i][1];
        celdaIdentificación.innerHTML = lista_PadresDeFamilia[i][2];
        celdaCorreoElectrónico.innerHTML = lista_PadresDeFamilia[i][3];
        celdasContraseña.innerHTML = lista_PadresDeFamilia[i][4];
        celdaConfirmarContraseña.innerHTML = lista_PadresDeFamilia[i][5];
        celdaSegundoNombre.innerHTML = lista_PadresDeFamilia[i][6];
        celdaSegundoApellido.innerHTML = lista_PadresDeFamilia[i][7];
        celdaNacionalidad.innerHTML = lista_PadresDeFamilia[i][8];
        celdaNúmeroTeléfono.innerHTML = lista_PadresDeFamilia[i][9];
        celdaProvincia.innerHTML = lista_PadresDeFamilia[i][10];
        celdaCantón.innerHTML = lista_PadresDeFamilia[i][11];
        celdaDistrito.innerHTML = lista_PadresDeFamilia[i][12];
        celdaCantidadDeHijos.innerHTML = lista_PadresDeFamilia[i][13];
        celdaAñoDeNacimiento.innerHTML = lista_PadresDeFamilia[i][14];

    }
};
