'use strict';

const modelo_registroCentro = require('./registroCentroEduc.model');

module.exports.registrar = function(req, res){


	let nuevoCentroEduc = new modelo_registroCentro({

		nombreComercial: req.body.nombreComercial,
		cedulaJuridica: req.body.cedulaJuridica,
		tipoDeCentro: req.body.tipoDeCentro,
		telefonoCtro: req.body.telefonoCtro,
		fax: req.body.fax,
		sitioWeb: req.body.sitioWeb,
		facebook: req.body.facebook,
		emailInstit: req.body.emailInstit,
		password: req.body.password,
		passwordConf: req.body.passwordConf,
		anoFund: req.body.anoFund,
		refHist: req.body.refHist,
		provincia: req.body.provincia,
		canton: req.body.canton,
		distrito: req.body.distrito,
		direccionExacta: req.body.direccionExacta,
		nombre: req.body.nombre,
		nombre2: req.body.nombre2,
		apellido: req.body.apellido,
		apellido2: req.body.apellido2,
		tipoID: req.body.tipoID,
		IDnumber: req.body.IDnumber,
		email: req.body.email,
		departamento: req.body.departamento,
		telefono: req.body.telefono,
		imgEscudo: req.body.imgEscudo

	});

	nuevoCentroEduc.save(function(error){
        if(error){
            res.json({success : false, msg: 'No se pudo registrar el centro ecucativo, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'El centro educativo fue registrado con éxito'}); 
        }
    });		
};



module.exports.listar = function(req, res){
	modelo_registroCentro.find().then(

		function(centrosEducativos){

			res.send(centrosEducativos);
		});
	};
