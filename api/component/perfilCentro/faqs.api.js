'use strict';


const modeloFaqs = require('../perfilCentro/faqs.model');


module.exports.registar=function(req,res){
    let faqsNew= new modeloFaqs({
        cod : req.body.cod,
        pregunta : req.body.pregunta,
        respuesta : req.body.respuesta,
    });
    faqsNew.save(
        function (error){
            if (error){
                res.json({ success: false, msg: 'No se pudo agregar pregunta frecuente'});
            }else{
                res.json({ success: true, msg: 'Pregunta Frecuente agregada exitosamente'});
            }
        }
    );
};

module.exports.listar = function(req, res){
	modeloFaqs.find().then(

		function(faqs){

			res.send(faqs);
		});
};