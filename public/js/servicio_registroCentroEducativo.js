'use strict';

function registrar_usuario(ptipo, pnombrecomercial, pcedulajuridica, ptipodecentro, ptelefonoctro, pfax, psitioweb, pfacebook, pemailinstit, 
                      pdireccionexacta, panofund, prefhist, pdepartamento, pext, pescudo, pfoto, pbilingue, ptecnico, 
                      preligioso, pnoreligioso, pvocacional, pidiomas, pbecas, pbachilleratoint, pmixto, pvarones, pmujeres, pprimaria, 
                      psecundaria, ptelefono, pcantidaddehijos, panodenacimiento, ptipoidentificacion, pidentificacion, pnombre, 
                      psegundonombre, papellido, psegundoapellido, pnacionalidad, pfechanacimiento, pprovincia, pcanton, pdistrito, 
                      pcorreo, pcontrasenna, pconfirmarcontrasenna, prankingmep, pcalifnum, prankingpadres, pcalifanno, pcodigoverif){
    let respuesta = '';
    let request = $.ajax({
        url : 'http://localhost:4000/api/registrar_usuario',
        method : "POST",
        data : {
            tipo: ptipo,
            nombrecomercial: pnombrecomercial,
            cedulajuridica: pcedulajuridica,
            tipodecentro: ptipodecentro,
            telefonoctro: ptelefonoctro,
            fax: pfax,
            sitioweb: psitioweb,
            facebook: pfacebook,
            emailinstit: pemailinstit,
            direccionexacta: pdireccionexacta,
            anofund: panofund,
            refhist: prefhist,
            departamento: pdepartamento,
            ext: pext,
            escudo: pescudo,
            foto: pfoto,
            bilingue: pbilingue,
            tecnico: ptecnico,
            religioso: preligioso,
            noreligioso: pnoreligioso,
            vocacional: pvocacional,
            idiomas: pidiomas,
            becas: pbecas,
            bachilleratoint: pbachilleratoint,
            mixto: pmixto,
            varones: pvarones,
            mujeres: pmujeres,
            primaria: pprimaria,
            secundaria: psecundaria,
            telefono: ptelefono,
            cantidaddehijos: pcantidaddehijos,
            anodenacimiento: panodenacimiento,
            tipoidentificacion: ptipoidentificacion,
            identificacion: pidentificacion,
            nombre: pnombre,
            segundonombre: psegundonombre,
            apellido: papellido,
            segundoapellido: psegundoapellido,
            nacionalidad: pnacionalidad,
            fechanacimiento: pfechanacimiento,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,
            correo: pcorreo,
            contrasenna: pcontrasenna,
            confirmarcontrasenna: pconfirmarcontrasenna,
            rankingmep: prankingmep,
            califnum: pcalifnum,
            rankingpadres: prankingpadres,
            califanno: pcalifanno,
            codigoverif: pcodigoverif
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

function obtener_lista_usuarios(){

    let lista_usuarios = [];
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
        lista_usuarios = res;
      });
    
      request.fail(function(){
       
      });

    return lista_usuarios;
};

