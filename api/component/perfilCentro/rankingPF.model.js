'use strict';

const mongoose= require('mongoose');

let schema_rankingPF= mongoose.Schema({
    id : {type: String, required: true},
    stars : {type: String,required:true}
});

module.exports=mongoose.model('ranking', schema_rankingPF);