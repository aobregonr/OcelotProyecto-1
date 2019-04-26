'use strict';



function registrar_faq(pcod, ppregunta, prespuesta){
    let request= $.ajax({
        url: 'http://localhost:4000/api/registrar_faqs',
        method: "POST",
        data: {
            cod : pcod,
            pregunta: ppregunta,
            respuesta: prespuesta

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


function obtener_faq(){
    let listaFAQS = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_faqs',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(listaFaq){
        listaFAQS = listaFaq;
      });
    
      peticion.fail(function(){
       
      });
      
    return listaFAQS;
};