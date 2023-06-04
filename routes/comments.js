const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// This router is mounted to a "starts with" path of '/'

// GET /performers/new (new functionality)
router.get('/comments/new', ensureLoggedIn, commentsCtrl.new);
// POST /performers (create functionality)
router.post('/projects/:id/comments', ensureLoggedIn, commentsCtrl.create);

router.delete('/projects/:projectId/comments/:id', ensureLoggedIn, commentsCtrl.delete);



module.exports = router;
