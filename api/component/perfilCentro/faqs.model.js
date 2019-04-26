'use strict';

const mongoose= require('mongoose');

let schema_faqs= mongoose.Schema({
    cod : {type: String, required: true},
    pregunta : {type: String, required: true},
    respuesta : {type: String,required:true}
});

module.exports=mongoose.model('faqs', schema_faqs);