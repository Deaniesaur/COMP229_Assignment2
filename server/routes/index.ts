import express from 'express';
import moment from 'moment';
const router = express.Router();
export default router;

//Create an index controller instance
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, ProcessLogout, ProcessRegisterPage } from '../controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

/* GET login page. */
router.get('/login', DisplayLoginPage);

/* POST process login button. */
router.post('/login', ProcessLoginPage);

/* GET registration page. */
router.get('/register', DisplayRegisterPage);

/* POST process register button. */
router.post('/register', ProcessRegisterPage);

/* GET process logout. */
router.get('/logout', ProcessLogout);

// module.exports = router;