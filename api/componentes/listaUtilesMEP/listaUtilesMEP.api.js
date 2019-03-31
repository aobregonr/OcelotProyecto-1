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
                res.json({ success: false, msg: 'No se pudo agregar lista de Utiles'});
            }else{
                res.json({ success: true, msg: 'Lista agregada de forma exitosa'});
            }
        }
    );
};
module.exports.listar=function(req,res){
    modelo_listaUtiles.find().then(
        function(listaUtiles){
           /* if(listaUtiles.length>0){
                res.json({ success: true, lista_listaUtiles: listaUtiles});
            }else{
                res.json({ success: false, lista_listaUtiles: listaUtiles});
            }*/
        res.send(listaUtiles);
        }
    );
};