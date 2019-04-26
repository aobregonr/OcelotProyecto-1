'use strict';

const express= require('express');
const router= express.Router();
const api_comment= require('./comentarios.api');

router.route('/registrar_comment')
    .post(
        function (req,res){
            api_comment.registar(req,res);
        }
    );
router.route('/listar_comment')
        .get(
            function(req,res){
                api_comment.listar(req,res);
            }
        );
        
module.exports = router;