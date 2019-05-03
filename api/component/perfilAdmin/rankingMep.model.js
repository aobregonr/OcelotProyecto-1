'use strict';

const mongoose= require('mongoose');

let schema_rankingMep= mongoose.Schema({

	nombrecomercial : {type: String, required: true},
	escudo:  {type: String, required: true},
	rankingmep: {type: String, required: true},
	califnum: {type: Number, required: true},
	califanno: {type: Number, required: true},
	tipodecentro: {type: String, required: true},
	primaria: {type: Boolean, required: true},
	secundaria: {type: Boolean, required: true}
});


module.exports=mongoose.model('rankingMep', schema_rankingMep);