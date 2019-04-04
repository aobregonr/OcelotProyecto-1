'use strict';

/**
 * Exportamos todas las dependencias necesarias para establecer la conexión
 */
const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      morgan =  require('morgan'),
      mongoose = require('mongoose');

/**
 * Se definen las variables necesarias para la conexión con MongoDB
 */
let db = mongoose.connection,
    dburl = 'mongodb://ocelot:ocelot123@proyecto-shard-00-00-mi3a9.mongodb.net:27017,proyecto-shard-00-01-mi3a9.mongodb.net:27017,proyecto-shard-00-02-mi3a9.mongodb.net:27017/educatecr?ssl=true&replicaSet=proyecto-shard-0&authSource=admin&retryWrites=true',
    port = 4000;

/**
 * Se le indica que cree un servidor extra dentro del puerto 4000 y escuche los cambios que se le hagan a esos archivos
 */
let server = app.listen(port,_server());

/**
 * Se define la conexión con Mongoose, enviándole como parámetro la url de la base de datos
 */
mongoose.connect(dburl, { useNewUrlParser: true });

/**
 * Si la conexión falla, imprime en consola el error
 */
db.on('error', console.error.bind(console, 'Error de conexión: '));

/**
 * Si la conexión es exitosa nos imprime en la consola que se ha establecido conexión con Mongo
 */
db.once('open', function () {
  console.log('Base de datos conectada correctamente');
});

/**
 * Le indicamos a express que envíe las respuestas a la carpeta "public"
 */
app.use(express.static(path.join(__dirname, '../public')));

/**
 * Le indicamos a la aplicación que el formato de los datos va a ser JSON
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use( function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

/**
 * Exportams todas las rutas dentro del index.js
 */

const registroCentro = require('./componentes/registroCentroEducativo/registroCentroEduc.route');
const registroPadreFamilia = require('./componentes/registroPadreFamilia/registroPadresFam.route'); 
const listaUtilesMep = require('./componentes/listaUtilesMEP/listaUtilesMEP.route');
const listaUtilesCen = require('./componentes/listaUtilesCentro/listaUtilesCentro.route');
/**
 * Le indicamos que le de acceso externo a las rutas inicializadas
 */
app.use('/api', registroCentro);
app.use('/api', registroPadreFamilia);
app.use('/api', listaUtilesMep);
app.use('/api', listaUtilesCen);
app.use('/api', require('./component/users/users.route'));


// Se guarda todo lo que se ha realizado
module.exports = app;

function _server(){
  console.log('Back-end corriendo en el puerto ' + port);
};
