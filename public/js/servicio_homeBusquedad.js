'use strict';


function obtener_lista_centros(){

    let lista_centros = [];
    let request = $.ajax({
        url: 'http://localhost:4000/api/listar_centroEducativo',
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

    return lista_centros;
};

