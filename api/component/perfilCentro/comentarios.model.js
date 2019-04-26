'use strict';

const mongoose= require('mongoose');

let schema_comment= mongoose.Schema({
    cod : { type: String, required: true},
    padre : {type: String, required: true},
    foto : {type: String, required: true},
    comentario : {type: String,required:true}
});

module.exports=mongoose.model('comments', schema_comment);