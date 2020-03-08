const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const PORT = process.env.PORT || 5000;


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(accessToken);
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email']}) ,(req, res)=> {

});

app.get('/auth/google/callback', (req, res)=> {
  
});

app.listen(PORT, ()=> {
    console.log(`App listening on PORT ${PORT}`);
});