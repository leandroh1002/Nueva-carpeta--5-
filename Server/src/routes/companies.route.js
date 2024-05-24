const { Router } = require('express');
const companiesRouter = Router();

const {getCompaniesController} = require ('../controllers/companies/getCompanies.controller')
const {postCompaniesController} = require ('../controllers/companies/postCompanies.controller')

companiesRouter.get('/companies', getCompaniesController);
companiesRouter.post('/companies', postCompaniesController);

module.exports = companiesRouter;