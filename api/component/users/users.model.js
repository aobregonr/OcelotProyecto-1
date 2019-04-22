'use strict';

let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({

    tipo: {type: String, required: true
    },
    nombrecomercial: {type : String, required: false, unique : false
    },
    cedulajuridica: {type : Number, required: false
    },
    tipodecentro: {type : String, required: false
    },
    telefonoctro: {type : Number, required: false
    },
    fax: {type : Number, required: false
    },
    sitioweb: {type : String, required: false, unique : false
    },
    facebook: {type : String, required: false, unique : false
    },
    emailinstit: {type : String, required: false
    },
    direccionexacta: {type : String, required: false
    },
    anofund: {type : Number, required: false
    },
    refhist: {type : String, required: false
    },
    departamento: {type : String, required: false
    },
    ext: {type : Number, required: false
    },
    escudo: {type: String, required : false
    },
    foto: {type: String, required : false
    },
    bilingue: {type: Boolean, required : false
    }, 
    tecnico: {type: Boolean, required : false
    },
    religioso:  {type: Boolean, required : false
    },
    noreligioso: {type: Boolean, required : false
    },
    vocacional: {type: Boolean, required : false
    },
    idiomas: {type: Boolean, required : false
    },
    becas:  {type: Boolean, required : false
    },
    bachilleratoint: {type: Boolean, required : false
    },
    mixto:  {type: Boolean, required : false
    },
    varones:  {type: Boolean, required : false
    },
    mujeres: {type: Boolean, required : false
    },
    primaria:  {type: Boolean, required : false
    },
    secundaria:  {type: Boolean, required : false
    },
    telefono: {type: Number, required: false
    },
    cantidaddehijos: {type: Number, required: false
    },
    anodenacimiento: {type: Number, required: false
    },
    tipoidentificacion: {type: String, required: true
    },
    identificacion: { type: Number, unique: true, required: true
    },
    nombre: { type: String, required: true
    },
    segundonombre: { type: String, required: false
    },
    apellido: {type: String, required: true
    },
    segundoapellido: {type: String, required: false
    },
    nacionalidad: {type: String, required: false
    },
    fechanacimiento: {type: Number, required: false
    },
    provincia: {type: String, required: true
    },
    canton: {type: String, required: true
    },
    distrito: {type: String,required: true
    },
    correo: {type: String, required: true
    },
    contrasenna: {type: String, required: true
    },
    confirmarcontrasenna: {type: String, required: true
    },
    rankingmep: {type : Number, required: false
    },
    califnum: {type : Number, required: false
    },
    rankingpadres: {type : Number, required: false
    },
    codigoverif: {type : String, required: false
    }

});

module.exports = mongoose.model('User', userSchema);
