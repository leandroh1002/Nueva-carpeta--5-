const { Router } = require('express');
const publishRouter = Router();

const {getPublishController} = require ('../controllers/publish/getPublish.controller')
const {getPublishIdController} = require ('../controllers/publish/getPublishId.controller')
const {postPublishController} = require ('../controllers/publish/postPublish.controller')

publishRouter.get('/publish', getPublishController);
publishRouter.get('/publish/:idPublish', getPublishIdController);
publishRouter.post('/publish', postPublishController);

module.exports = publishRouter;