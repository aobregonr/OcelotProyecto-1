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


//esta es para modificar cualquier usuario en el db
module.exports.modificar_cita = function (req, res) {
  agendModel.findByIdAndUpdate(req.body.id, { $set: req.body},
    function (error) {
      if(error){
        res.json({success : false, msg: 'No se pudo modificar la cita, ocurrió el siguiente error ' + error});
      }else{
        res.json({success : true, msg: 'La cita fue modificada con éxito'}); 
      }
    });

};

module.exports.eliminar_cita = function(req, res){
    agendModel.findByIdAndRemove(req.body.id,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar la cita. Ocurrió el siguiente error ' + error});
            }else{
                res.json({success: true ,msg: 'La cita se eliminó con éxito'}); 
            }
        }
    )
};

 

