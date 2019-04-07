'use strict';

const express = require('express');
const router = express.Router();
const api_registroCentro = require('./busquedaAvanzada.api');


router.route('/listar_centroEducativo')
	.get(function(req, res){
			api_registroCentro.listar(req, res);
		});


//exporta las rutas
module.exports = router;