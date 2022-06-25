const createError = require('http-errors');
const express = require('express');
const path = require ('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const forms = require('forms');
//middleware
const session = require('express-session');
const passport= require('passport');
const methodOverride = require('method-override')


require('dotenv').config();


const app = express();


//configure passport
require('./config/database');

require('./config/passport');

//routes

const capsuleRoutes = require('./routes/capsuleRoutes');
const indexRoutes = require('./routes/index');
const loginRoutes = require('./routes/loginRoutes');


app.use('./routes', capsuleRoutes);
app.use('./routes', indexRoutes);
app.use('./routes', loginRoutes);





//engine set
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs'); 
app.get('/aboutme.ejsaboutme.ejs', function(req,res){
    res.sendFile(path.resolve(__dirname,'pages/aboutme'));
});
app.get('/archive.ejsarchive.ejs', function(req,res){
    res.sendFile(path.resolve(__dirname,'pages/archive'));
});
app.get('/ask.ejs', function(req,res){
    res.sendFile(path.resolve(__dirname, 'pages/ask'));
});
app.get('/payme$', function(req,res){
    res.sendFile(path.resolve(__dirname,'pages/payme$'));
});

app.use(express.static('public'));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'public/capsule.html')));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(forms());
//mounting middleware

app.use(session({
    secret: 'New Capsule',
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());


app.use(function(req,res){
    res.status(404).send('Cant find that!')
});

app.use(function(err, req, res, next){
    res.local.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err: {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;