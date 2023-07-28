const express = require('express');
const router = express.Router();
const projectsCtrl = require('../controllers/projects');

// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, projectsCtrl.index); 

router.post('/', ensureLoggedIn, projectsCtrl.create)

router.delete('/:id', ensureLoggedIn, projectsCtrl.delete);

router.get('/save/:id', ensureLoggedIn, projectsCtrl.saveProject);

router.post('/like/:id', ensureLoggedIn, projectsCtrl.likeProject);




module.exports = router;