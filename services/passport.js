const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id,done) => {
  let user = await User.findById(id);
  done(null, user);
});





passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleID : profile.id });
      if (!user) {
        user = await User({ googleID : profile.id }).save();
      } 
      done(null, user);
    } catch (err) {
      console.log("Error accessing user info", err);
    }
      
  }
));


