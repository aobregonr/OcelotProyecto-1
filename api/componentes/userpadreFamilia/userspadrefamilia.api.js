'use strict';
const userpadrefamilia = require('./userspadrefamilia.model');

module.exports.registrar = function (req, res){
    let nuevopadrefamilia = new padreFamiliaModel({
        nombre: req.body.nombre,
        segundonombre: req.body.segundonombre,
        apellido: req.body.apellido,
        segundoapellido: req.body.segundoapellido,
        identificacion: req.body.identificacion,
        nacionalidad: req.body.nacionalidad,
        numeroidentificacion: req.body.numeroidentificacion,
        telefono: req.body.telefono,
        correo: req.body.correo,
        provincia: req.body.provincia,
        canton: req.body.canton,
        distrito: req.body.distrito,
        contrasenna: req.body.contrasenna,
        cantidadhijos: req.body.cantidadhijos,
        confcontrasenna: req.body.confcontrasenna,
        fechanacimiento: req.body.fechanacimiento,  
    });

    nuevopadrefamilia.save(function(error){
        if(error){
            res.json({success : false,
            msj : 'El usuario no pudo ser registrado : ' + error    
            });    
        }else{
            res.json({success : true,
                msj : 'El usuario ha sido registrado exitosamente'   
                });   
        }
    });
};

module.exports.listar_userspadrefamilia = function(req, res){
    userpadrefamilia.find().sort({apellido : 'asc'}).then(
        function(padresFamilia){
            res.send(padresFamilia);
        }
    );
};

 module.exports.validar = function (req, res) {
    userpadrefamilia.findOne({contrasenna: req.body.contrasenna}).then(
         function (usuarioPadreFamilia) {
             if (usuarioPadreFamilia) {
                 if (usuarioPadreFamilia.contrasenna == req.body.contrasenna) {
                     res.json({
                         success: true,
                         usuarioPadreFamilia: usuarioPadreFamilia
                     });
                 } else {
                     res.json({
                         success: false
                     });
                 }
             } else {
                 res.json({
                     success: false,
                     msg: 'El usuario no existe'
                 });
             }
         }
     )
};