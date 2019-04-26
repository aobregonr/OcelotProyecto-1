'use strict';

const express= require('express');
const router= express.Router();
const api_rankingPF= require('./rankingPF.api');

router.route('/registrar_ranking')
    .post(
        function (req,res){
            api_rankingPF.registar(req,res);
        }
    );
router.route('/listar_ranking')
        .get(
            function(req,res){
                api_rankingPF.listar(req,res);
            }
        );
        
module.exports = router;