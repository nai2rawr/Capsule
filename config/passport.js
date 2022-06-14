const passport = require('passport');
const GoogleStrategy = require 
('passport-google-oauth').OAuth2Strategy;
const TwitterStratergy = require('passport-twitter-oauth').OAuth2Strategy;


//congig Passport

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL:process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb){

}
))


passport.use(new TwitterStratergy({
    consumerKey:TWITTER_CONSUMER_KEY,
    consumerSecret:TWITTER_CONSUMER_SECRET,
    callbackURL:'http://localhost:6000/oauth2twittercallback'
},
function(token, tokenSecret, profile, cb){
User.findOrCreate({twitterId: profile.id}, function(err, user){
    return cb(err,user);
});
}
));