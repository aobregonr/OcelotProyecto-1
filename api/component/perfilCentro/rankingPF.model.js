'use strict';

const mongoose= require('mongoose');

let schema_rankingPF= mongoose.Schema({
    idpadres : {type: String, required: true},
    idcentro : {type: String, required: true},
    califnum : {type: String, required: true},
    stars : {type: String,required:true},
    tipodecentro: {type: String, required: true},
	primaria: {type: Boolean, required: true},
	secundaria: {type: Boolean, required: true}
});

module.exports=mongoose.model('ranking', schema_rankingPF);