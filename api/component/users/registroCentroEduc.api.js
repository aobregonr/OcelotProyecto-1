'use strict';

const modelo_registroCentro = require('./registroCentroEduc.model');

module.exports.registrar = function(req, res){


	let nuevoCentroEduc = new modelo_registroCentro({

		tipo: req.body.tipo,
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
		ext: req.body.ext,
		telefono: req.body.telefono,
		escudo: req.body.escudo,
		foto: req.body.foto,
		//
		bilingue: req.body.bilingue,
        tecnico: req.body.tecnico,
        religioso: req.body.religioso,
        noReligioso: req.body.noReligioso,
        vocacional: req.body.vocacional,
        idiomas: req.body.idiomas,
        becas: req.body.becas,
        bachilleratoInt: req.body.bachilleratoInt,
        mixto: req.body.mixto,
        varones: req.body.varones,
        mujeres: req.body.mujeres,
        primaria: req.body.primaria,
        secundaria: req.body.secundaria

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
