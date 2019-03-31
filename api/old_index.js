'use strict';

const express = require('express'),
    app = express(),
    morgan = require('morgan'),
    mongoose = require('mongoose');

// Database connections
const URI = 'mongodb://127.0.0.1:27017/ocelotsoftware';

mongoose.connect(URI, {
        useNewUrlParser: true
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

// Settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', require('./component/users/users.route'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});