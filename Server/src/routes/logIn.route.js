const { Router } = require('express');
const logInRouter = Router();

const {postLogInController} = require ('../controllers/login/postLogin.controller')

logInRouter.post('/login', postLogInController);

module.exports = logInRouter;