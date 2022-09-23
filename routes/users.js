var express = require('express');
const user = require('../controllers/user');
var router = express.Router();

router.post('/signup', user.signUp);    
router.post('/login', user.login);
router.post('/logout', user.logout);

module.exports = router;
