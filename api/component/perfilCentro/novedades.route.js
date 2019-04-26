'use strict';

const express= require('express');
const router= express.Router();
const api_novedades= require('./novedades.api');

router.route('/registrar_novedades')
    .post(
        function (req,res){
            api_novedades.registar(req,res);
        }
    );
router.route('/listar_novedades')
        .get(
            function(req,res){
                api_novedades.listar(req,res);
            }
        );
        
module.exports = router;