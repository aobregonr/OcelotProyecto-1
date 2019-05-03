'use strict';


const modelofileUp = require('../perfilCentro/fileUp.model');


module.exports.registar=function(req,res){
    let fileNew= new modelofileUp({
        url : req.body.url,
        fileName : req.body.fileName,
        cod : req.body.cod
    });
    fileNew.save(
        function (error){
            if (error){
                res.json({ success: false, msg: 'No se pudo agregar su documento'});
            }else{
                res.json({ success: true, msg: 'Documento agregado existosamente'});
            }
        }
    );
};

module.exports.listar = function(req, res){
	modelofileUp.find().then(

        function(listaFiles){

			res.send(listaFiles);
		});
};

