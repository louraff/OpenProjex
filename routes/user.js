const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user'); 
const ensureLoggedIn = require('../config/ensureLoggedIn');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', ensureLoggedIn, userCtrl.show);



module.exports = router;
