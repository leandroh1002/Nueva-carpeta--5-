const { Router } = require('express');
const carrerRouter = Router();

const {getCarrerController} = require ('../controllers/carrer/getCarrer.controller')

carrerRouter.get('/carrer', getCarrerController);

module.exports = carrerRouter;