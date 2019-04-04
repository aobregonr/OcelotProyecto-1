'use strict';

const modelo_registroPadreFamilia = require('./RegistroPadresFam.model');

module.exports.registrar = function(req, res){

    let nuevoPadreFamilia = new modelo_registroPadreFamilia({

 
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        tipoID : req.body.tipoID,
        identificacion : req.body.identificacion,
        correoElectronico : req.body.correoElectronico,
        contrasena : req.body.contrasena,
        confContrasena : req.body.confContrasena,
        segundoNombre : req.body.segundoNombre,
        segundoApellido : req.body.segundoApellido,
        nacionalidad : req.body.nacionalidad,
        telefono : req.body.telefono,
        provincia : req.body.provincia,
        canton : req.body.canton,
        distrito : req.body.distrito,
        cantidadDeHijos : req.body.cantidadDeHijos,
        anoDeNacimiento : req.body.anoDeNacimiento
    });

    nuevoPadreFamilia.save(function(error){
        if(error){
            res.json({success : false, msj : 'No se pudo registrar el usuario, ocurrió el siguiente error ' + error });    
        }else{
            res.json({success : true, msj : 'El usuario fue registrado con éxito' });   
        }

    });
};


module.exports.listar = function(req, res){
    modelo_registroPadreFamilia.find().then(

        function(padresFamilia){

            res.send(padresFamilia);
        });
};



