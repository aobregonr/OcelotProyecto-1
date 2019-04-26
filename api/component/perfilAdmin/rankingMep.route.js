'use strict';

const express= require('express');
const router= express.Router();
const api_rankingMep= require('./rankingMep.api');

router.route('/registrar_rankingMep')
    .post(
        function (req,res){
            api_rankingMep.registar(req,res);
        }
    );
router.route('/listar_rankingMep')
        .get(
            function(req,res){
                api_rankingMep.listar(req,res);
            }
        );

        
module.exports = router;