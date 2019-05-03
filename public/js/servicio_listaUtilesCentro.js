'use strict';



function registrar_listaUtilesCentro(pcod,pcentroName,pnivel, ptipo, pcantidad, pdescripcion){
    let request= $.ajax({
        url: 'http://localhost:4000/api/registrar_listaUtilesCentro',
        method: "POST",
        data: {
            cod : pcod,
            centroName : pcentroName,
            nivel: pnivel,
            tipo_articulo: ptipo,
            cantidad: pcantidad,
            descripcion: pdescripcion
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function(res){
        swal.fire({
            type: 'info',
            title: 'Atención',
            text: res.msg
        });
    });

    request.fail(function(res){
        swal.fire({
            type: 'error',
            title: 'Proceso inconcluso',
            text: res.msg
        });
    });
};


function obtener_listaUtilesCentro(){
    let listaUtilCen = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_listaUtilesCentro',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(listaUtiles){
        listaUtilCen = listaUtiles;
      });
    
      peticion.fail(function(){
       
      });
      
    return listaUtilCen;
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
