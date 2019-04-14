'use strict';


const userModel = require('../users/users.model');


module.exports.listar = function(req, res){
	userModel.find().then(

		function(usuario){

			res.send(usuario);
		});
	};
