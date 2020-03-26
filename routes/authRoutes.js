const passport = require('passport');
const router = require('express').Router();

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email']}) ,(req, res)=> {

});

router.get('/auth/google/callback', passport.authenticate('google'));


router.get('/logout', (req,res)=> {
    req.logout();
    res.send({msg: "You are now logged out", user: req.user});
});


router.get('/api/current_user', (req, res)=> {
    if (req.user) {
        res.send(req.user);
    }
    else {
        res.send({msg: "You are currently logged out"});
    }
    
});

module.exports = router;