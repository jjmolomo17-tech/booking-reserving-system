const express = require('express');
const router = express.Router();
const userController = require('../controllers/userCntroller');

router.post('/register' , userController.createUser);
router.get('/users' , userController.getUser);
router.get('/users/id' , userController.getUserById);

module.exports = router;
