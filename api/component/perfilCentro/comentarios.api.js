'use strict';


const modeloComment = require('../perfilCentro/comentarios.model');


module.exports.registar=function(req,res){
    let commentNew= new modeloComment({
        cod: req.body.cod,
        padre : req.body.padre,
        foto: req.body.foto,
        comentario : req.body.comentario,
    });
    commentNew.save(
        function (error){
            if (error){
                res.json({ success: false, msg: 'No se pudo agregar su comentario'});
            }else{
                res.json({ success: true, msg: 'Comentario agregado exitosamente'});
            }
        }
    );
};

module.exports.listar = function(req, res){
	modeloComment.find().then(

		function(comment){

			res.send(comment);
		});
};