const { Router } = require('express');
const peopleRouter = Router();

const {getPeopleController} = require ('../controllers/people/getPeople.controller')

peopleRouter.get('/people', getPeopleController);

module.exports = peopleRouter;