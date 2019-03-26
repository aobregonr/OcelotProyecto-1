'use strict';
const nodeMailer = require('nodemailer');
const userModel = require('./users.model');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mantiscenfo@gmail.com',
        pass: 'mantis2018'
    }
});

 module.exports.validar = function (req, res) {
     userModel.findOne({
         correo: req.body.correo
     }).then(
         function (usuario) {
             if (usuario) {
                 if (usuario.contrasenna == req.body.contrasenna) {
                     res.json({
                         success: true,
                         usuario: usuario
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
