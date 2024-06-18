const { Router } = require('express');
const peopleRouter = Router();

const { getPeopleController } = require ('../controllers/people/getPeople.controller');
const { getPeopleIdController } = require('../controllers/people/getPeopleId.controller');
const { postPeoplePublish } = require('../controllers/people/postPeoplePublish');

peopleRouter.get('/people', getPeopleController);
peopleRouter.get('/people/:idPeople', getPeopleIdController);
peopleRouter.post('/people', postPeoplePublish);

module.exports = peopleRouter;