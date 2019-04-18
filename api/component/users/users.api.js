'use strict';
//const nodeMailer = require('nodemailer');
const userModel = require('./users.model');

/*
const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mantiscenfo@gmail.1com',
        pass: 'mantis2018'
    }
});*/

module.exports.registrar = function(req, res){


    let nuevoUsuario= new userModel({

        tipo: req.body.tipo,
        nombrecomercial : req.body.nombrecomercial,
        cedulajuridica : req.body.cedulajuridica,
        tipodecentro : req.body.tipodecentro,
        telefonoctro : req.body.telefonoctro,
        fax : req.body.fax,
        sitioweb : req.body.sitioweb,
        facebook : req.body.facebook,
        emailinstit : req.body.emailinstit,
        direccionexacta : req.body.direccionexacta,
        anofund : req.body.anofund,
        refhist : req.body.refhist,
        departamento : req.body.departamento,
        ext : req.body.ext,
        escudo :req.body.escudo,
        foto : req.body.foto,
        bilingue : req.body.bilingue,
        tecnico : req.body.tecnico,
        religioso : req.body.religioso,
        noreligioso : req.body.noreligioso,
        vocacional :req.body.vocacional,
        idiomas : req.body.idiomas,
        becas : req.body.becas,
        bachilleratoint : req.body.bachilleratoint,
        mixto : req.body.mixto,
        varones : req.body.varones,
        mujeres : req.body.mujeres,
        primaria : req.body.primaria,
        secundaria : req.body.secundaria,
        telefono : req.body.telefono,
        cantidaddehijos : req.body.cantidaddehijos,
        anodenacimiento : req.body.anodenacimiento,
        tipoidentificacion: req.body.tipoidentificacion,
        identificacion: req.body.identificacion,
        nombre: req.body.nombre,
        segundonombre: req.body.segundonombre,
        apellido: req.body.apellido,
        segundoapellido: req.body.segundoapellido,
        nacionalidad: req.body.nacionalidad,
        fechanacimiento: req.body.fechanacimiento,
        provincia: req.body.provincia,
        canton: req.body.canton,
        distrito: req.body.distrito,
        correo: req.body.correo,
        contrasenna: req.body.contrasenna,
        confirmarcontrasenna: req.body.confirmarcontrasenna,


    });

    nuevoUsuario.save(function(error){
        if(error){
            res.json({success : false, msg: 'No se pudo registrar el usuario, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'El usuario fue registrado con éxito'}); 
        }
    });     
};



module.exports.listar = function(req, res){
    userModel.find().then(

        function(usuario){

            res.send(usuario);
        });
};




 module.exports.validar = function (req, res) {
     userModel.findOne({
         correo: req.body.correo
     }).then(
         function(usuario) {
             if (usuario) {
                 if (usuario.contrasenna === req.body.contrasenna) {
                     res.json({
                         success: true, 
                         usuario: usuario
                     });
                 } else {
                     res.json({
                         success: false,
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
