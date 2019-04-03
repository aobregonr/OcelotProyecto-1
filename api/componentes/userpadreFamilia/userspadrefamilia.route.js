'use strict';
const express = require('express'); 
const router = express.Router();  //metodo Router dentro de express que indica a las peticiones donde redireccionarse.
const api_userspadrefamilia = require('./userspadrefamilia.api');  //Responde a cada una de las peticiones que realizemos con Router.

router.route('/registrar_userspadrefamilia')
    .post(function (req, res) {
        api_userspadrefamilia.registrar(req, res);
    });
   
router.route('/listar_userspadrefamilia')
	.get(function(req, res){
        api_userspadrefamilia.listar(req, res);
});


 router.route('/validar_userspadrefamilia')
    .post(function (req, res) {
        api_userspadrefamilia.validar(req, res);
    });



module.exports = router;

