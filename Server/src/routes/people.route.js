const { Router } = require('express');
const peopleRouter = Router();

const { getPeopleController } = require ('../controllers/people/getPeople.controller');
const { getPeopleIdController } = require('../controllers/people/getPeopleId.controller');

peopleRouter.get('/people', getPeopleController);
peopleRouter.get('/people/:idPeople', getPeopleIdController);

module.exports = peopleRouter;