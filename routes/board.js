var express = require('express');
const board = require('../controllers/board');
var router = express.Router();

router.get('/', board.getPosts);

router.get('/:id', board.getPost);

router.post('/', board.createPost);

router.put('/:id', board.updatePost);

router.delete('/:id', board.deletePost);

module.exports = router;
