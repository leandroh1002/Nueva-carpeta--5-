const { Router } = require('express');
const carrerRouter = Router();

const {getCarrerController} = require ('../controllers/carrer/getCarrer.controller');
const { postCarrerController } = require('../controllers/carrer/postCarrer.controller');

carrerRouter.get('/carrer', getCarrerController);
carrerRouter.post('/carrer', postCarrerController);

module.exports = carrerRouter;