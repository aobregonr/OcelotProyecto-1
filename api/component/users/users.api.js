'use strict';
const nodeMailer = require('nodemailer');
const userModel = require('./users.model');


const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'educatecr.ocelot@gmail.com',
        pass: 'Educatecr3*'
    }
});


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
        rankingmep: req.body.rankingmep,
        califnum: req.body.califnum,
        rankingpadres: req.body.rankingpadres,
        codigoverif: req.body.codigoverif,
        codigoautenticar: req.body.codigoautenticar,
        estado: req.body.estado

    });

    nuevoUsuario.save(function(error){
        if(error){
            res.json({success : false, msg: 'No se pudo registrar el usuario, ocurrió el siguiente error ' + error});
        }else{

            let mailOptions = {
                from: 'educatecr.ocelot@gmail.com',
                to : nuevoUsuario.correo,
                subject : 'Bienvenido a EducateCR',
                html: `<!DOCTYPE html>
                        <html lang="es">

                        <head>
                            <meta charset="UTF-8">

                        </head>

                        <body>

                          <div id="MainPurple" style="background-color: #571845; width: 520px; height: 510px;">
                                <h1 style="font-weight: normal;color: #fff; padding: 15px; font-family: Helvetica, sans-serif;" id="title">Educate<strong>CR</strong>.com</h1>

                                <div style="padding: 0px 20px;">
                                    <div style="padding: 2px 20px; background-color: #fff; border-radius: 10px; height: 400px;">

                                         <h1 style="font-family:Helvetica, sans-serif; font-size: 24px;">¡Hola, ${nuevoUsuario.nombre}!</h1>

                                    <p style="font-family:Helvetica, sans-serif; font-size: 14px;">¡Bienvenido/a al buscador de Centros Educativos<br> más completo y accesible de Costa Rica! </p>

                             
                                    <div style="padding-left: 15px;">
                                    <div style="background-color: #990033;border-radius: 5px;width: 200px;max-height: 130px;" id="codeContainer">
                                        <h2 style="color: #FFF; font-family: Josefin Sans, sans-serif; font-weight: normal; padding: 15px;font-size: 16px;text-align: center;"> Su código de verificación es:</h2>
                                    <div style="padding-left: 50px;">
                                        <p style=" color:#fff; font-family:Helvetica, sans-serif; font-size: 20px; text-align: center; width: 100px;"> ${nuevoUsuario.codigoverif}</p>
                                    </div>
                                    <img style="padding-left: 310px;" src="https://res.cloudinary.com/veromorera/image/upload/v1555893463/buhoBuscador.png"
                                 alt="buhoBuscador" height="120px" width="120px">

                                       
                              </div>
                                </div>
                                  <p style=" padding-top: 80px;color: gray; font-size: 12px; font-family:Helvetica, sans-serif;">EducateCR.com © 2019<br>Es una aplicación web diseñada por Ocelot Solutions</p>

                                </div>
                        </div>

                        </body>

                        </html>`
            };
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error);
                }else{
                    console.log('Correo enviado' + info.response);
                }
            })
            res.json({success : true, msg: 'El usuario fue registrado con éxito'}); 
        }
    });     
};


module.exports.olvidoContrasenna = function(req, res){

  userModel.findOne({
         correo: req.body.correo
     }).then(
         function(usuario) {
             if (usuario) {

              let contrasennaRecover = usuario.contrasenna;  
  
              let mailOptions = {
                from: 'educatecr.ocelot@gmail.com',
                to : usuario.correo,
                subject : 'Bienvenido a EducateCR',
                html: `<!DOCTYPE html>
                        <html lang="es">

                        <head>
                            <meta charset="UTF-8">

                        </head>

                        <body>

                          <div id="MainPurple" style="background-color: #571845; width: 520px; height: 510px;">
                                <h1 style="font-weight: normal;color: #fff; padding: 15px; font-family: Helvetica, sans-serif;" id="title">Educate<strong>CR</strong>.com</h1>

                                <div style="padding: 0px 20px;">
                                    <div style="padding: 2px 20px; background-color: #fff; border-radius: 10px; height: 400px;">

                                         <h1 style="font-family:Helvetica, sans-serif; font-size: 24px;">¡Hola, ${usuario.nombre}!</h1>

                                    <p style="font-family:Helvetica, sans-serif; font-size: 14px;">¡Usted ha realizado una solicitud de recuperación contraseña. <br> A continuación se muestra su contraseña registrada a este correo. </p>

                             
                                    <div style="padding-left: 15px;">
                                    <div style="background-color: #990033;border-radius: 5px;width: 200px;max-height: 130px;" id="codeContainer">
                                        <h2 style="color: #FFF; font-family: Josefin Sans, sans-serif; font-weight: normal; padding: 15px;font-size: 16px;text-align: center;"> Su contraseña es:</h2>
                                    <div style="padding-left: 50px;">
                                        <p style=" color:#fff; font-family:Helvetica, sans-serif; font-size: 20px; text-align: center; width: 100px;"> ${contrasennaRecover}</p>
                                    </div>
                                    <img style="padding-left: 310px;" src="https://res.cloudinary.com/veromorera/image/upload/v1555893463/buhoBuscador.png"
                                 alt="buhoBuscador" height="120px" width="120px">

                                       
                              </div>
                                </div>
                                  <p style=" padding-top: 80px;color: gray; font-size: 12px; font-family:Helvetica, sans-serif;">EducateCR.com © 2019<br>Es una aplicación web diseñada por Ocelot Solutions</p>

                                </div>
                        </div>

                        </body>

                        </html>`
            };
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error);
                }else{
                    console.log('Correo enviado' + info.response);
                }
            })
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


module.exports.buscarUsuario = function (req, res) {
  userModel.findById({_id: req.body.id}).then(
    function (usuario) {
      res.send(usuario);
    });

};


//esta es para modificar el codigo de verificacion, pero asi como esta, se puede modificar cualquier dato
module.exports.autenticar_usuario = function (req, res) {
  userModel.findByIdAndUpdate(req.body.id, { $set: req.body},
    function (error, usuario) {
      if(error){
        res.json({success : false, msg: 'No se pudo modificar el código de autentificación, ocurrió el siguiente error ' + error});
      }else{
        res.json({success : true, msg: 'El código de autentificación fue modificado con éxito'}); 
      }
    });

};

module.exports.eliminar_centro = function(req, res){
    userModel.findByIdAndRemove(req.body.id,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar el Centro educativo. Ocurrió el siguiente error ' + error});
            }else{
                res.json({success: true ,msg: 'El Centro educativo se eliminó con éxito'}); 
            }
        }
    )
};



