var router = require('express').Router();
const req = require('express/lib/request');
const { append } = require('express/lib/response');
const passport = require('passport');
router.get('/auth/google', passport.authenticate(
    'google',
    {scope:['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/loginRoutes',
        failureRedirect: '/loginRoutes',
    }
));

router.get('/logout', function(require, res){
    req.logout();
    res.redirect('/');
});

router.get('/auth/twitter',
passport.authenticate('twitter'));

router.get('/auth/twitter/callback',
passport.authenticate('twitter',{failureRedirect: '/login'}),
function(req, res){
    res.redirect('/');
});

module.exports = router;