'use strict';



function registrar_actividad( pactividad, pimagen){
    let request= $.ajax({
        url: 'http://localhost:4000/api/registrar_actividades',
        method: "POST",
        data: {
            actividad: pactividad,
            imagen: pimagen

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


function obtener_actividad(){
    let listaActividades = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_actividades',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(listaActiv){
        listaActividades = listaActiv;
      });
    
      peticion.fail(function(){
       
      });
      
    return listaActividades;
};