const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', userCtrl.show);



module.exports = router;
