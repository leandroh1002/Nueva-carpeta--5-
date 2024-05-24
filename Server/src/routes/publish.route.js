const { Router } = require('express');
const publishRouter = Router();

const {getPublishController} = require ('../controllers/publish/getPublish.controller')

publishRouter.get('/publish', getPublishController);

module.exports = publishRouter;