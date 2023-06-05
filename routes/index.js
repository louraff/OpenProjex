var express = require('express');
var router = express.Router();
const passport = require('passport');
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Open Projex' });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/projects',
    failureRedirect: '/projects'
  }
));

router.get('/auth/github', passport.authenticate('github', {
  scope: ['user', 'project', ' public_repo'],

}));

  router.get('/auth/github/callback', 
  passport.authenticate('github', { successRedirect: '/projects',failureRedirect: '/projects' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/index');
  });
});


module.exports = router;
