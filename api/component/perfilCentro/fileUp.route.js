'use strict';

const express= require('express');
const router= express.Router();
const api_FileUp= require('./fileUp.api');

router.route('/registrar_fileUp')
    .post(
        function (req,res){
            api_FileUp.registar(req,res);
        }
    );
router.route('/listar_fileUp')
        .get(
            function(req,res){
                api_FileUp.listar(req,res);
            }
        );
        
module.exports = router;