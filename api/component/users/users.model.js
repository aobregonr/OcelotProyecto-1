'use strict';

let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true
    },
    identificacion: {
        type: Number,
        unique: true,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    segundonombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    segundoapellido: {
        type: String,
        required: true
    },
    nacionalidad: {
        type: String,
        required: true
    },
    fechanacimiento: {
        type: Date,
        required: true
    },
    provincia: {
        type: String,
        required: true
    },
    canton: {
        type: String,
        required: true
    },
    distrito: {
        type: String,
        required: true
    },
    cantidadhijos: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    contrasenna: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
