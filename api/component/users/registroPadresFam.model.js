'use strict';

let mongoose = require('mongoose');


let schema_registroPadreFamilia = mongoose.Schema({    
    
    tipo: {type: String, required: true, unique: false},
    nombre : {type: String, required: true},
    apellido : {type: String, required: true},
    tipoID :  {type: String, required: true},
    identificacion : {type: Number, required: true, unique: true},
    correoElectronico : {type: String, required: true},
    contrasena : {type: String, required: true},
    confContrasena : {type: String, required: true},
    segundoNombre : {type: String, required: false},
    segundoApellido : {type: String, required: false},
    nacionalidad : {type: String, required: true},
    telefono : {type: Number, required: false},
    provincia : {type: String, required: true},
    canton : {type: String, required: true},
    distrito : {type: String, required: true},
    cantidadDeHijos : {type: Number, required: false},
    anoDeNacimiento : {type: Number, required: false}

});

module.exports = mongoose.model('RegistroPadreFamilia', schema_registroPadreFamilia);