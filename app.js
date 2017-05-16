var express = require('express'),
    passport = require('passport'),
    passportlocal = require('passport-local').Strategy,
    session = require('express-session'),
    http = require('http'),
    mongoos = require('mongoose'),
    color = require('chalk');

var app = express(),
    server = http.createServer(app),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev',
    config = require('./app-server/config/config.js')[env];

/**********DB CMD Sart *********/
if (config.prod) {
    require('./app-server/cmd/mongodb.js')(config);
}


setTimeout(function () {
    /**********Mongoos Setup*********/
    var connDb = require('./app-server/config/mongoose.connection')(config);

    /**********Express Setup*********/
    require('./app-server/config/express.js')(app, config, passport, connDb);

    /**********Entity Setup*********/
    require('./app-server/config/mongoose.entity');

    /**********Passport Setup*********/
    require('./app-server/config/auth/passport.init')(passport);

    /**********Start Server*********/
    server = require('http-shutdown')(server);

    server.listen(app.get('port'));

    console.log(color.green('Express server listening on port ' + server.address().port));


    /**********cleanup after server shutdown*********/
    server.on('shutdown', function () {
        /**********CMD Threadkill *********/
        if (config.prod) {
            require('./app-server/cmd/threadkill.js');
        };
    });


}, 2000);
