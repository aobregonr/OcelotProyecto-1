'use strict';  // Este archivo se encargará de enviar la peticiones del registro de Padres de Familia al back-end.

let lista_PadresDeFamilia = [];

function registrar_PadreDeFam(psNombre, psApellido, psIdentificación, psCorreoElectrónico, psContraseña, psConfirmarContraseña, psSegundoNombre, psSegundoApellido, psNacionalidad, pnNúmeroTeléfono, psProvincia, psCantón, psDistrito, pnCantidadDeHijos, pnAñoDeNacimiento) {
    let nuevoPadreDeFamilia = [];
    nuevoPadreDeFamilia.push(psNombre, psApellido, psIdentificación, psCorreoElectrónico, psContraseña, psConfirmarContraseña, psSegundoNombre, psSegundoApellido, psNacionalidad, pnNúmeroTeléfono, psProvincia, psCantón, psDistrito, pnCantidadDeHijos, pnAñoDeNacimiento);

    lista_PadresDeFamilia.push(nuevoPadreDeFamilia);
};

function obtener_lista_padresDeFam(){
    return lista_PadresDeFamilia;
};
