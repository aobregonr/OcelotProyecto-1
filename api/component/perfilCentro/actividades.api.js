'use strict';


const modeloActividades = require('../perfilCentro/actividades.model');


module.exports.registar=function(req,res){
    let actividadesNew= new modeloActividades({
        cod : req.body.cod,
        actividad : req.body.actividad,
        imagen : req.body.imagen,
    });
    actividadesNew.save(
        function (error){
            if (error){
                res.json({ success: false, msg: 'No se pudo agregar actividad'});
            }else{
                res.json({ success: true, msg: 'Actividad agregada existosamente'});
            }
        }
    );
};

module.exports.listar = function(req, res){
	modeloActividades.find().then(

		function(actividades){

			res.send(actividades);
		});
};


