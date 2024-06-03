const { Router } = require('express');
const signInRouter = Router();

const {postSignInController} = require ('../controllers/login/postSignIn.controller')

signInRouter.post('/signin', postSignInController);

module.exports = signInRouter;