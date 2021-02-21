const express = require('express');
const router = express.Router();

const homeController = require ('app/http/controllers/HomeController');
const loginController = require ('app/http/controllers/auth/loginController');
const registerController = require ('app/http/controllers/auth/registerController');

router.get('/' , homeController.index);
router.get('/login' , loginController.showLoginForm);
router.get('/register' , registerController.showRegistionForm);
router.post('/register' , registerController.registerProccess);




module.exports = router;