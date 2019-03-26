'use strict';
const express = require('express');
const router = express.Router();
const userApi = require('./users.api');

router.route('/registrar_usuario')
    .post(function (req, res) {
        userApi.registrar(req, res);
    });

router.route('/validar_credenciales')
    .post(function (req, res) {
        userApi.validar(req, res);
    });

module.exports = router;