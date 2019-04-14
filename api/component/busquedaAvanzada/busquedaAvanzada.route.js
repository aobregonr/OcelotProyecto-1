'use strict';

const express = require('express');
const router = express.Router();
const userApi = require('./busquedaAvanzada.api');


router.route('/listar_usuario')
	.get(function(req, res){
			userApi.listar(req, res);
		});


//exporta las rutas
module.exports = router;