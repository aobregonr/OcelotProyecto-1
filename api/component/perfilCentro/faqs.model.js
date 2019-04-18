'use strict';

const mongoose= require('mongoose');

let schema_faqs= mongoose.Schema({
    pregunta : {type: String, required: true},
    respuesta : {type: String,required:true}
});

module.exports=mongoose.model('faqs', schema_faqs);