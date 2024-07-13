const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();


router.get('/', userController.getUsers);


router.post('/subscribe', userController.subscribeUser);

module.exports = router;
