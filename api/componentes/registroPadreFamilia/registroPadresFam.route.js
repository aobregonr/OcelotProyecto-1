'use strict';

const express = require('express'); 
const router = express.Router();  //metodo Router dentro de express que indica a las peticiones donde redireccionarse.
const api_registroPadreFamilia = require('./registroPadresFam.api');  //Responde a cada una de las peticiones que realizemos con Router.



router.route('/registrar_padresFamilia')
	.post(function(req, res){
			api_registroPadreFamilia.registrar(req, res);
		});

router.route('/listar_padresFamilia')
	.get(function(req, res){
			api_registroPadreFamilia.listar(req, res);
		});


//exporta las rutas
module.exports = router;