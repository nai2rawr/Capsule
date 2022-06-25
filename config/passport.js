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
CapUser.findOne({'googleId': profile.id},
function(err, CapUser){
    if (err)return cb(err);
    if (CapUser){
        if(!CapUser.avatar){
            CapUser.avatar = profile.photos[0].value; 
            CapUser.save(function(err){
                return cb(null, CapUser);
            });
        }else{
            return cb(null, CapUser);
        }
    }else{
        const newCapUser = new CapUser({
            email:profile.emails[0].value,
        });
        newCapUser.save(function(err) {
            if (err) return cb(err);
            return cb(null, newCapUser);
        });
    }
});
}
));



passport.use(new TwitterStratergy({
    consumerKey:TWITTER_CONSUMER_KEY,
    consumerSecret:TWITTER_CONSUMER_SECRET,
    callbackURL:'http://localhost:6000/oauth2twittercallback'
},
function(token, tokenSecret, profile, cb){
CapUser.findOrCreate({twitterId: profile.id}, function(err, CapUser){ if (err)
    return cb(err, CapUser);
    if(CapUser){
        if(!CapUser.avatar){
            CapUser.avatar = profile.photos[0].value;
            CapUser.save(function(err){
                return cb(null, CapUser);
            });
        }else {
            return cb(null, CapUser);
        }
    }else{
        const newCapUser = new CapUser({
            name:  profile.displayName,
            email: profile.username[0].value
        });
        newCapUser.save(function(err){
            if (err)return cb(err);
            return cb(null, newCapUser);
        });
    }
});
}
));



passport.serializeUser(function(CapUser, done){
    done(null, CapUser.id);
});

passport.deserializeUser(function(id, done){
    CapUser.findbyId(id, function(err, CapUser){
        done(err, CapUser)
    });
});