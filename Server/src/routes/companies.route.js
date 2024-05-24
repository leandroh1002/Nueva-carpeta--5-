const { Router } = require('express');
const companiesRouter = Router();

const {getCompaniesController} = require ('../controllers/companies/getCompanies.controller')

companiesRouter.get('/companies', getCompaniesController);

module.exports = companiesRouter;