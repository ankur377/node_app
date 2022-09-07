const express = require("express");
const router = express.Router();
const cron = require("node-cron");
const checkAge = require('../middleware/checkAge');
const showList = require('../controllers/Auth/user');
const login = require('../controllers/Auth/loginController');
const register = require('../controllers/Auth/registerController');
const pdfControll = require('../controllers/pdfController');
const cronjobController = require('../controllers/cronjobController');
const childController = require('../controllers/childController');
const fileController = require('../controllers/fileController');

// TODO:GET ROUTE
router.get("/", checkAge, showList.getAllRecord);

// TODO:LOGIN ROUTE
router.post("/login", login.loginController);


// TODO:REGISTER ROUTE
router.post('/register', register.registerController);

router.get('/userLists', pdfControll.pdfController);

// Creating a cron job which runs on every 60 second
router.get('/task', cronjobController.cronjobController);

router.get('/child', childController.childController);

router.post('/upload', fileController.fileController);


module.exports = router