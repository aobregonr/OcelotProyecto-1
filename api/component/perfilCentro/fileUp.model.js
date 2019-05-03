'use strict';

const mongoose= require('mongoose');

let schema_filesUp= mongoose.Schema({
	url : {type: String, required: true},
    fileName : {type: String,required:true},
    cod : {type: String, required: true},
});

module.exports=mongoose.model('fileUp', schema_filesUp);