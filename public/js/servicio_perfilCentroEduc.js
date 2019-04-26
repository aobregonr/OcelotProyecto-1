'use strict';

function obtener_lista_centros(){

    let lista_centros = [];
    let request = $.ajax({
        url: 'http://localhost:4000/api/listar_usuario',
        type: 'GET',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      request.done(function(res){
        lista_centros = res;
      });
    
      request.fail(function(){
       
      });
      console.log(lista_centros);
    return lista_centros;
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


function obtener_novedad(){
    let listaNovedades = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_novedades',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(novedad){
        listaNovedades = novedad;
      });
    
      peticion.fail(function(){
       
      });
      
    return listaNovedades;
};