const { Router } = require('express');
const publishRouter = Router();

const {getPublishController} = require ('../controllers/publish/getPublish.controller')
const {getPublishIdController} = require ('../controllers/publish/getPublishId.controller')
const {postPublishController} = require ('../controllers/publish/postPublish.controller')
const {getAllPublishController} = require ('../controllers/publish/getAllPublish.controller')

publishRouter.get('/publish', getPublishController);
publishRouter.get('/publish/:idPublish', getPublishIdController);
publishRouter.post('/publish', postPublishController);
publishRouter.get('/publishes/all', getAllPublishController);

module.exports = publishRouter;