'use strict';



function registrar_listaUtilesMEP(pnivel, ptipo, pcantidad, pdescripcion){
    let request= $.ajax({
        url: 'http://localhost:4000/api/registrar_listaUtilesMEP',
        method: "POST",
        data: {
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
            type: 'success',
            title: 'Proceso realizado de manera optima',
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


function obtener_listaUtilesMEP(){
    let listaUtilMEP = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_listaUtilesMEP',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(listaUtiles){
        listaUtilMEP = listaUtiles;
      });
    
      peticion.fail(function(){
       
      });
      
    return listaUtilMEP;
};
