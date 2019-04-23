'use strict';

function validar_credenciales(pcorreo, pcontrasenna) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/validar_credenciales',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: { 
            correo: pcorreo, 
            contrasenna: pcontrasenna
        }
    });

    peticion.done(function (response) {
        respuesta = response;
       
        
        sessionStorage.setItem('conectado', response.success);

       
    });

    peticion.fail(function (response) {
        respuesta = response;
    });

    return respuesta;
};


function autenticar_codigo(pid, pcodigoverif, pcodigoautenticar) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/modificar_codigoautenticar',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: { 
            id: pid, 
            codigoverif: pcodigoverif,
            codigoautenticar: pcodigoautenticar
        },
    });

    peticion.done(function (response) {
        respuesta = response;
       
    });

    peticion.fail(function (response) {
        respuesta = response;
    });

    return respuesta;
};

