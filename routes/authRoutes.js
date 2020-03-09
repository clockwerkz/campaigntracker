const passport = require('passport');
const router = require('express').Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email']}) ,(req, res)=> {

});

router.get('/google/callback', passport.authenticate('google'));


module.exports = router;