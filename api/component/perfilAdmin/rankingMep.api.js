'use strict';


const modeloRankingMep = require('../perfilAdmin/rankingMep.model');


module.exports.registar=function(req,res){
    let rankingMepNew= new modeloRankingMep({


    nombrecomercial : req.body.nombrecomercial, 
    escudo : req.body.escudo,
    rankingmep : req.body.rankingmep,
    califnum : req.body.califnum,
    califanno : req.body.califanno,
    });

    rankingMepNew.save(
        function (error){
            if (error){
                res.json({ success: false, msg: 'No se pudo registrar ranking'});
            }else{
                res.json({ success: true, msg: 'Ranking MEP registrado exitosamente'});
            }
        }
    );
};

module.exports.listar = function(req, res){
	modeloRankingMep.find().then(

		function(rankingMep){

			res.send(rankingMep);
		});
};