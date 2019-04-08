'use strict';

const express= require('express');
const router= express.Router();
const api_ListaUtiles= require('./listaUtilesCentro.api');

router.route('/registrar_listaUtilesCentro')
    .post(
        function (req,res){
            api_ListaUtiles.registar(req,res);
        }
    );
router.route('/listar_listaUtilesCentro')
        .get(
            function(req,res){
                api_ListaUtiles.listar(req,res);
            }
        );
        
module.exports = router;