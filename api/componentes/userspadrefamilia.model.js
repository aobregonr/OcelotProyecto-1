'use strict';

let mongoose = require('mongoose');


let padreSchema = new mongoose.Schema({    
    nombre: {type: String, required: true},
    segundonombre: {type: String},
    apellido: {type: String, required: true},
    segundoapellido: {type: String},
    identificacion: {type: Number, unique: true, required: true},
    nacionalidad: {type: String, required: true},
    numeroidentificacion: {type: Number, unique: true, required: true},
    telefono: {type: Number, unique: true, required: true},
    correo: {type: String, required: true},
    provincia: {type: String},
    canton: {type: String},
    distrito: {type: String},
    contrasenna: {type: String, required: true},
    cantidadhijos: {type: Number, required: true},
    confcontrasenna: {type: String, required: true},
    fechanacimiento: {type: Date, required: true},    
});

module.exports = mongoose.model('PadreFamilia', padreSchema);