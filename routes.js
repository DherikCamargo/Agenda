const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController')
const LoginController = require('./src/controllers/loginController')

// Rotas da Home
route.get ('/', homeController.index);

//rotas de login

route.get('/login/index', LoginController.index)
route.post('/login/register', LoginController.register)

module.exports = route;