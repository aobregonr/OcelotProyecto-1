'use strict';

const agendModel = require('./agendarCita.model');

module.exports.registrar = function(req, res){

    let nuevaCita = new agendModel({
        fecha: req.body.fecha,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        hora: req.body.hora,
        telefono: req.body.telefono,
        descripcion: req.body.descripcion,
        identCentroEducativo: req.body.identCentroEducativo,
        identPadresFamilia: req.body.identPadresFamilia

    });

    nuevaCita.save(function(error){
         if (error) {
             res.json({
                 success: false,
                 msg: 'No se pudo agendar la cita, ocurrió el siguiente error ' + error
             });
         } else {
             res.json({
                 success: true,
                 msg: 'Se pudo agendar la cita con exito'
             });
         }
    })

};

