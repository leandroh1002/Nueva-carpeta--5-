const { Router } = require('express');
const publishRouter = Router();

const {getPublishController} = require ('../controllers/publish/getPublish.controller')
const {getPublishIdController} = require ('../controllers/publish/getPublishId.controller')

publishRouter.get('/publish', getPublishController);
publishRouter.get('/publish/:idPublish', getPublishIdController);

module.exports = publishRouter;