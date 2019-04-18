'use strict';

const express= require('express');
const router= express.Router();
const api_actividades= require('./actividades.api');

router.route('/registrar_actividades')
    .post(
        function (req,res){
            api_actividades.registar(req,res);
        }
    );
router.route('/listar_actividades')
        .get(
            function(req,res){
                api_actividades.listar(req,res);
            }
        );
        
module.exports = router;