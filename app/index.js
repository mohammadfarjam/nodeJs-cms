const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { check, validationResult } = require('express-validator');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const Mongoose = require('mongoose');
const flash = require('connect-flash');
const passport = require('passport');


module.exports = class Application {
    constructor() {
        this.setupExpress();
        this.setConfig();
        this.setMongoConnection();
        this.setRouters();
    }



    setupExpress() {
        const server = http.createServer(app);
        server.listen(3000, () => console.log('listen on port 3000 '));
    }




    setMongoConnection() {
        Mongoose.Promise = global.Promise;
        Mongoose.connect('mongodb://localhost/nodejs-cms');
    }





    setConfig() {
        app.use(express.static('public'));
        app.set('view engine', 'ejs');
        app.set('views', path.resolve('./resource/views'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
       

        app.use(session({
            secret: 'mysecretkey',
            resave: true,
            saveUninitialized: true,
            store: new MongoStore({ mongooseConnection: Mongoose.connection })
        }));

        app.use(cookieParser('mysecretkey'));
        app.use(flash());
    }

    setRouters(){
            app.use(require('app/routes/api'));
            app.use(require('app/routes/web'));
        }

}








