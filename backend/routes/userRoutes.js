const express = require('express');
const router = express.Router();
const userController = require('../controllers/userCntroller');

router.post('/register' , userController.createUser);