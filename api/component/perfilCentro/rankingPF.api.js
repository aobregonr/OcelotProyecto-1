'use strict';


const modeloRankingPF = require('../perfilCentro/rankingPF.model');


module.exports.registar=function(req,res){
    let rankingNew= new modeloRankingPF({
        id : req.body.id,
        stars : req.body.stars,
    });
    rankingNew.save(
        function (error){
            if (error){
                res.json({ success: false, msg: 'No se pudo registrar ranking'});
            }else{
                res.json({ success: true, msg: 'Ranking agregado exitosamente'});
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


