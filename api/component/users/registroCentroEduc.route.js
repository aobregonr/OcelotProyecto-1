'use strict';

const express = require('express');
const router = express.Router();
const api_registroCentro = require('./registroCentroEduc.api');


router.route('/registrar_centroEducativo')
	.post(function(req, res){
			api_registroCentro.registrar(req, res);
		});

router.route('/listar_centroEducativo')
	.get(function(req, res){
			api_registroCentro.listar(req, res);
		});


//exporta las rutas
module.exports = router;

