var express = require('express');
const board = require('../controllers/board');
var router = express.Router();

router.get('/all', board.getPosts);

router.get('/:id', board.getPost);

module.exports = router;
