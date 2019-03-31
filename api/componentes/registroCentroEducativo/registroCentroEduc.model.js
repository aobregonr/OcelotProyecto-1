'use strict';

const mongoose = require('mongoose');

let schema_registroCentroEduc = mongoose.Schema({

	nombreComercial : {type : String, required: true, unique : true},
	cedulaJuridica : {type : Number, required: true, unique : true},
	tipoDeCentro : {type : String, required: true, unique : false},
	telefonoCtro : {type : Number, required: true},
	fax : {type : Number, required: false},
	sitioWeb : {type : String, required: false},
	facebook : {type : String, required: false},
	emailInstit : {type : String, required: true},
	password : {type : String, required: true},
	passwordConf : {type : String, required: true},
	anoFund : {type : Number, required: true},
	refHist : {type : String, required: false},
	provincia : {type : String, required: true},
	canton : {type : String, required: true},
	distrito : {type : String, required: true},
	direccionExacta : {type : String, required: true},
	//
	nombre : {type : String, required: true},
	nombre2 : {type : String, required: false},
	apellido : {type : String, required: true},
	apellido2 : {type : String, required: false},
	tipoID : {type : String, required: true},
	IDnumber : {type : Number, required: true, unique : true},
	email : {type : String, required: false},
	departamento : {type : String, required: false},
	telefono : {type : Number, required: false},
	escudo: {type: String, required : false}


});

module.exports = mongoose.model('RegistroCentro', schema_registroCentroEduc);