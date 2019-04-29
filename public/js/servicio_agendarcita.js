'use strict';

function agendarCita(pfecha, pnombre, pemail, phora, papellido, ptelefono, pdescripcion, pidentCentroEducativo, pidentPadresFamilia){
    let request = $.ajax({
        url: 'http://localhost:4000/api/registrar_agendaCita',
            method: "POST",
            data: {
                fecha: pfecha,
                nombre: pnombre,
                email: pemail,
                hora: phora,
                apellido: papellido,
                telefono: ptelefono,
                descripcion: pdescripcion,
                identCentroEducativo: pidentCentroEducativo,
                identPadresFamilia: pidentPadresFamilia
            },
            dataType: "json",
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

};

function listarCitas(){

    let lista_citas = [];
    let request = $.ajax({
        url: 'http://localhost:4000/api/listar_agendaCita',
        type: 'GET',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      request.done(function(res){
        lista_citas = res;
      });
    
      request.fail(function(){
       
      });

    return lista_citas;
};
