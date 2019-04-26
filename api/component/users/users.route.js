'use strict';
const express = require('express');
const router = express.Router();
const userApi = require('./users.api');

router.route('/registrar_usuario')
    .post(function (req, res) {
        userApi.registrar(req, res);
    });

router.route('/listar_usuario')
	.get(function(req, res){
			userApi.listar(req, res);
		});

router.route('/validar_credenciales')
    .post(function (req, res) {
        userApi.validar(req, res);
    });


router.route('/buscar_usuario')
    .post(function (req, res) {
        userApi.buscarUsuario(req, res);
    });

router.route('/modificar_usuario')
    .post(function (req, res) {
        userApi.autenticar_usuario(req, res);
    });

router.route('/eliminar_centro')
.post(
    function(req , res){
        userApi.eliminar_centro(req, res);
    }
);


module.exports = router;