'use strict';


const modeloNovedades = require('../perfilCentro/novedades.model');


module.exports.registar=function(req,res){
    let novedadesNew= new modeloNovedades({
        id : req.body.id,
        imagen : req.body.imagen,
    });
    novedadesNew.save(
        function (error){
            if (error){
                res.json({ success: false, msg: 'No se pudo agregar anuncio/novedad'});
            }else{
                res.json({ success: true, msg: 'Anuncio/novedad agregado existosamente'});
            }
        }
    );
};

module.exports.listar = function(req, res){
	modeloNovedades.find().then(

		function(novedad){

			res.send(novedad);
		});
};


