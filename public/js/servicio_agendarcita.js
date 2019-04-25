'use strict';

function agendarCita(pFecha, pNombre, pEmail, pHora, pApellido, pTelefono, pDecripcion, pIdentificadorUsuario, pIdentificadorCentroEducativo){
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
                descripcion: pDecripcion,
                identificadorUsuario: pIdentificadorUsuario,
                identificadorCentroEducativo: pIdentificadorCentroEducativo
            },
            dataType: "json",
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

};
