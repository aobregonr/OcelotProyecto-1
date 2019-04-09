'use strict';

const express= require('express');
const router= express.Router();
const api_faqs= require('./faqs.api');

router.route('/registrar_faqs')
    .post(
        function (req,res){
            api_faqs.registar(req,res);
        }
    );
router.route('/listar_faqs')
        .get(
            function(req,res){
                api_faqs.listar(req,res);
            }
        );
        
module.exports = router;