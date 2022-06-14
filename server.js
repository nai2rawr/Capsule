const express = require('express');
const path = require ('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
//middleware
const session = require('express-session');
const passport= require('passport');
const methodOverride = require('method-override');


require('dotenv').config();


const app = express();

//configure passport
require('./config/database');

require('./config/passport');

//routes

//engine setup


//mounting middleware
app.use(session({
    secret: 'New Capsule',
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());