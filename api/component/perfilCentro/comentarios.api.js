'use strict';


const modeloComment = require('../perfilCentro/comentarios.model');


module.exports.registar=function(req,res){
    let commentNew= new modeloComment({
        cod: req.body.cod,
        padre : req.body.padre,
        foto: req.body.foto,
        comentario : req.body.comentario,
        estado : req.body.estado
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


module.exports.buscar_comentario = function (req, res) {
  modeloComment.findById({_id: req.body.id}).then(
    function (usuario) {
      res.send(usuario);
    });

};

module.exports.actualizar_comentario = function (req, res) {
  modeloComment.findByIdAndUpdate(req.body.id, { $set: req.body},
    function (error, usuario) {
      if(error){
        res.json({success : false, msg: 'No se pudo actualizar el estado, ocurrió el siguiente error ' + error});
      }else{
        res.json({success : true, msg: 'El estado fue modificado con éxito'}); 
      }
    });
};




module.exports.eliminar_comentario = function(req, res){
    modeloComment.findByIdAndRemove(req.body.id,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar el comentario. Ocurrió el siguiente error ' + error});
            }else{
                res.json({success: true ,msg: 'El comentario se eliminó con éxito'}); 
            }
        }
    )
};



