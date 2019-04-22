'use strict';

let mongoose = require('mongoose');

let agentSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hora: {
        type: Date,
        required: true
    }, 
    telefono: {
        type: Number,
        required: true
    }, 
    descripcion: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('AgentCita', agentSchema);