'use strict';

const modelo_listaUtiles= require('./listaUtilesMEP.model');

module.exports.registar=function(req,res){
    let listaUtilesNew= new modelo_listaUtiles({
        nivel : req.body.nivel,
        tipo_articulo : req.body.tipo_articulo,
        cantidad : req.body.cantidad,
        descripcion : req.body.descripcion 
    });
    listaUtilesNew.save(
        function (error){
            if (error){
                res.json({ success: false, msg: 'No se pudo agregar artículo a la lista de útiles, complete los datos pendientes.'});
            }else{
                res.json({ success: true, msg: 'Artículo agregado correctamente'});
            }
        }
    );
};
module.exports.listar=function(req,res){
    modelo_listaUtiles.find().then(
        function(listaUtiles){
        res.send(listaUtiles);
        }
    );
};