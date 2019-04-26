'use strict';


//ponerlas en minuscula, meterlos como parametros 


function registro_rankingMEP(pnombrecomercial, pescudo, prankingmep, pcalifnum, pcalifanno){
    let respuesta = '';
    let request = $.ajax({
        url : 'http://localhost:4000/api/registrar_rankingMep',
        method : "POST",
        data : {
            nombrecomercial : pnombrecomercial, 
            escudo : pescudo, 
            rankingmep : prankingmep,
            califnum : pcalifnum,
            califanno : pcalifanno
        },

        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
    });


    request.done(function(res){
       swal.fire({
            type : 'info',
            buttonsStyling: false,
			customClass: {
			title: 'title-class',
			confirmButton: 'confirm-button-class'},
            title : '¡Atención!',
            text : res.msg
        });

    });

    request.fail(function(res){
        swal.fire({
            type : 'error',
            buttonsStyling: false,
			customClass: {
			title: 'title-class',
			confirmButton: 'confirm-button-class'},
            title : 'Proceso no realizado',
            text : res.msg
        });

    });
};

function obtener_rankingMEP(){

    let lista_rankingMep = [];
    let request = $.ajax({
        url: 'http://localhost:4000/api/listar_rankingMep',
        type: 'GET',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      request.done(function(res){
        lista_rankingMep = res;
      });
    
      request.fail(function(){
       
      });

    return lista_rankingMep;
};

function obtener_usuario_por_id(pid){
    let usuario= '';
    let request = $.ajax({
        url: 'http://localhost:4000/api/buscar_usuario',
        type: 'POST',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            id: pid
        }
      });
    
      request.done(function(res){
        usuario = res;
      });
    
      request.fail(function(){
       
      });

    return usuario;
};

function activar_centro(pid, pestado) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/modificar_usuario',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: { 
            id: pid, 
            estado: pestado
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


function modificar_califNumerica(pid, pcalifnum) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/modificar_usuario',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: { 
            id: pid, 
            califnum: pcalifnum
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


function eliminar_centro(pid){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/eliminar_centro',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: { 
            id: pid, 
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

function eliminar_comentario(pid){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/eliminar_comentario',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: { 
            id: pid, 
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