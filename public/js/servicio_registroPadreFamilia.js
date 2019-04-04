'use strict';  // Este archivo se encargará de enviar la peticiones del registro de Padres de Familia al back-end.

function registrar_padresFamilia(pnombre, papellido, ptipoID, pidentificacion, pcorreoElectronico, pcontrasena, 
                              pconfirmarContrasena, psegundoNombre, psegundoApellido, pnacionalidad, pnumeroTelefono, 
                              pprovincia, pcanton, pdistrito, pcantidadDeHijos, panoDeNacimiento) {


    let respuesta = '';
    let request = $.ajax({
        url : 'http://localhost:4000/api/registrar_padresFamilia',
        method : "POST",
        data : {

    		 nombre : pnombre,
    		 apellido : papellido,
             tipoID : ptipoID,
    		 identificacion : pidentificacion,
    		 correoElectronico : pcorreoElectronico,
    		 contrasena : pcontrasena,
    		 confContrasena : pconfirmarContrasena,
    		 segundoNombre : psegundoNombre,
    		 segundoApellido : psegundoApellido,
    		 nacionalidad : pnacionalidad,
    		 telefono : pnumeroTelefono,
    		 provincia : pprovincia,
    		 canton : pcanton,
    		 distrito : pdistrito,
    		 cantidadDeHijos : pcantidadDeHijos,
    		 anoDeNacimiento : panoDeNacimiento
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

function obtener_lista_padresDeFam(){

	let lista_PadresDeFamilia = [];
    let request = $.ajax({
        url: 'http://localhost:4000/api/listar_padresFamilia',
        type: 'GET',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      request.done(function(res){
        lista_PadresDeFamilia = res;
      });
    
      request.fail(function(){
       
      });

    return lista_PadresDeFamilia;
};
