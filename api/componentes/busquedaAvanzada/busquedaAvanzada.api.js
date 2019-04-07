'use strict';


const modelo_registroCentro = require('../registroCentroEducativo/registroCentroEduc.model');


module.exports.listar = function(req, res){
	modelo_registroCentro.find().then(

		function(centrosEducativos){

			res.send(centrosEducativos);
		});
	};
