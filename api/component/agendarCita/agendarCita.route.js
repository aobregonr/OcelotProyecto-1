'use strict';
const express = require('express');
const router = express.Router();
const userApi = require('./agendarCita.api');

router.route('/registrar_agendaCita')
    .post(function (req, res) {
        userApi.registrar(req, res);
    });

router.route('/listar_agendaCita')
    .get(function (req, res) {
        userApi.listar(req, res);
    });
