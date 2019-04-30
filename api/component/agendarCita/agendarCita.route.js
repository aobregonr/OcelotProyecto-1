'use strict';
const express = require('express');
const router = express.Router();
const citaApi = require('./agendarCita.api');

router.route('/registrar_agendaCita')
    .post(function (req, res) {
        citaApi.registrar(req, res);
    });

router.route('/listar_agendaCita')
    .get(function (req, res) {
        citaApi.listarCita(req, res);
    });

router.route('/modificar_cita')
    .post(function (req, res) {
        citaApi.modificar_cita(req, res);
    });

router.route('/eliminar_cita')
    .get(function (req, res) {
        citaApi.eliminar_cita(req, res);
    });



module.exports = router;