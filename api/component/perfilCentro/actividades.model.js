'use strict';

const mongoose= require('mongoose');

let schema_actividades= mongoose.Schema({
    cod : {type: String, required: true},
    actividad : {type: String, required: true},
    imagen : {type: String,required:true}
});

module.exports=mongoose.model('actividades', schema_actividades);