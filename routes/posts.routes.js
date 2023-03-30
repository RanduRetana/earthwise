const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller.js');

//when we go to / we will se our view feed.js
router.get('/posts', postsController.get_nuevo);
router.get('/', postsController.listar);
router.get('/add', postsController.get_nuevo);
router.post('/add', postsController.post_nuevo);

module.exports = router;
