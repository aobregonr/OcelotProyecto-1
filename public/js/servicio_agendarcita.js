'use strict';

function agendarCita(pFecha, pNombre, pEmail, pHora, pApellido, pTelefono, pDecripcion){
    let request = $.ajax({
        url: 'http://localhost:4000/api/registrar_agendaCita',
            method: "POST",
            data: {
                fecha: pFecha,
                nombre: pNombre,
                email: pEmail,
                hora: pHora,
                apellido: pApellido,
                telefono: pTelefono,
                descripcion: pDecripcion
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
