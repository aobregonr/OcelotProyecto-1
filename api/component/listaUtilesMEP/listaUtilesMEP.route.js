'use strict';

const express= require('express');
const router= express.Router();
const api_ListaUtiles= require('./listaUtilesMEP.api');

router.route('/registrar_listaUtilesMEP')
    .post(
        function (req,res){
            api_ListaUtiles.registar(req,res);
        }
    );
router.route('/listar_listaUtilesMEP')
        .get(
            function(req,res){
                api_ListaUtiles.listar(req,res);
            }
        );
        
module.exports = router;