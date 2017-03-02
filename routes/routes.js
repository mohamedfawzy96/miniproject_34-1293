// routes file
var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
var postController = require('../controllers/post');
var summaryController = require('../controllers/summary');


var passport = require('passport');




router.get('/', userController.login_page);
//router.get('/summary',);

router.post('/', userController.signup);
router.post('/login', userController.login);
router.post('/createpost', postController.create_post);
router.get('/summary', summaryController.summary_view);








router.get('/:username', userController.profile_view);




module.exports = router;
