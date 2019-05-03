'use strict';


const modeloRankingPF = require('../perfilCentro/rankingPF.model');


module.exports.registar=function(req,res){
    let rankingNew= new modeloRankingPF({

        idpadres : req.body.idpadres,
        idcentro : req.body.idcentro,
        califnum : req.body.califnum,
        stars: req.body.stars,
        tipodecentro: req.body.tipodecentro,
        primaria: req.body.primaria,
        secundaria: req.body.secundaria

    });
    rankingNew.save(
        function (error){
            if (error){
                res.json({ success: false, msg: 'No se pudo registrar ranking'});
            }else{
                //no quiero que envie respuesta, porque necesito agregar una funcion al boton de confirm.
            }
        }
    );
};

module.exports.listar = function(req, res){
	modeloRankingPF.find().then(

		function(ranking){

			res.send(ranking);
		});
};


