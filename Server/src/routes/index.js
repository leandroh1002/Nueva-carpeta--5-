const router = require ('express').Router();

const peopleRouter = require ('./people.route');
const publishRouter = require ('./publish.route');
const carrerRouter = require ('./carrer.route');
const companiesRouter = require ('./companies.route');
const logIn = require ('./logIn.route');
const signIn = require ('./signIn.route');

router.use(peopleRouter)
router.use(publishRouter)
router.use(carrerRouter)
router.use(companiesRouter)
router.use(logIn)
router.use(signIn)

module.exports = router;
