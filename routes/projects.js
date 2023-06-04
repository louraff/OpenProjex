const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const projectsCtrl = require('../controllers/projects');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, projectsCtrl.index); 

router.post('/', ensureLoggedIn, projectsCtrl.create)

router.delete('/:id', ensureLoggedIn, projectsCtrl.delete);


module.exports = router;