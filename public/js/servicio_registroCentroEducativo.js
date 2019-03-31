'use strict';

function registrar_centroEducativo(pnombreComercial, pcedulaJuridica, ptipoDeCentro, ptelefonoCtro, pfax, psitioWeb,
									pfacebook, pemailInstit, ppassword, ppasswordConf, panoFund, prefHist, pprovincia,
									pcanton, pdistrito, pdireccionExacta, pnombre, pnombre2, papellido, papellido2,
									ptipoID, pIDnumber, pemail, pdepartamento, ptelefono, pescudo){
	let respuesta = '';
    let request = $.ajax({
        url : 'http://localhost:4000/api/registrar_centroEducativo',
        method : "POST",
        data : {
            nombreComercial: pnombreComercial,
			cedulaJuridica: pcedulaJuridica,
			tipoDeCentro: ptipoDeCentro,
			telefonoCtro: ptelefonoCtro,
			fax: pfax,
			sitioWeb: psitioWeb,
			facebook: pfacebook,
			emailInstit: pemailInstit,
			password: ppassword,
			passwordConf: ppasswordConf,
			anoFund: panoFund,
			refHist: prefHist,
			provincia: pprovincia,
			canton: pcanton,
			distrito: pdistrito,
			direccionExacta: pdireccionExacta,
			nombre: pnombre,
			nombre2: pnombre2,
			apellido: papellido,
			apellido2: papellido2,
			tipoID: ptipoID,
			IDnumber: pIDnumber,
			email: pemail,
			departamento: pdepartamento,
			telefono: ptelefono,
			escudo: pescudo
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

