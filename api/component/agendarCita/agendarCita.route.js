'use strict';
const express = require('express');
const router = express.Router();
const userApi = require('./agendarCita.api');

router.route('/registrar_agendaCita')
    .post(function (req, res) {
        userApi.registrar(req, res);
    });

router.route('/listar_agendaUsuario')
    .get(function (req, res) {
        userApi.listarPadre(req, res);
    });

router.route('/listar_agendaCentro')
    .get(function (req, res) {
        userApi.listarCentro(req, res);
    });

module.exports = router;