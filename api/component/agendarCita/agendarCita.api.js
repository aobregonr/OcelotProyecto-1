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
        identPadresFamilia: req.body.identPadresFamilia,
        estado: req.body.estado

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
                 msg: 'Se agendó la cita con éxito'
             });
         }
    })

};


module.exports.listarCita = function(req, res){
    agendModel.find().then(

        function(cita){

            res.send(cita);
        });

};

 

