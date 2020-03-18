const passport = require('passport');
const router = require('express').Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email']}) ,(req, res)=> {

});

router.get('/google/callback', passport.authenticate('google'));


router.get('/logout', (req,res)=> {
    req.logout();
    res.send({msg: "You are now logged out", user: req.user});
});


router.get('/current_user', (req, res)=> {
    res.send(req.user);
});

module.exports = router;