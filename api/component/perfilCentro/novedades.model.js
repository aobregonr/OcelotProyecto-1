'use strict';

const mongoose= require('mongoose');

let schema_novedades= mongoose.Schema({
	id : {type: String, required: true},
    imagen : {type: String,required:true}
});

module.exports=mongoose.model('novedades', schema_novedades);