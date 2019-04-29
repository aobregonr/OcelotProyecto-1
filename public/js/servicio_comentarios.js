'use strict';





function registrar_comentario( pcod, ppadre, pfoto, pcomentario, pestado){
    let request= $.ajax({
        url: 'http://localhost:4000/api/registrar_comment',
        method: "POST",
        data: {
            cod: pcod,
            padre: ppadre,
            foto: pfoto,
            comentario : pcomentario,
            estado: pestado
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function(res){
       
    });

    request.fail(function(res){
        swal.fire({
            type: 'error',
            title: 'Proceso inconcluso',
            text: res.msg
        });
    });
};


function obtener_comentarios(){
    let listaComment = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_comment',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(comment){
        listaComment = comment;
      });
    
      peticion.fail(function(){
       
      });
      
    return listaComment;
};