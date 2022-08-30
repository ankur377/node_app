const express = require("express");
const router = express.Router();
const checkAge = require('../middleware/checkAge');
const showList = require('../controllers/main');
const login = require('../controllers/loginController');
const register = require('../controllers/registerController');
const pdfControll = require('../controllers/pdfController');


// TODO:GET ROUTE
router.get("/", checkAge, showList.getAllRecord);

// TODO:LOGIN ROUTE
router.post("/login", login.loginController);


// TODO:REGISTER ROUTE
router.post('/register', register.registerController);

router.get('/userLists', pdfControll.pdfController);

module.exports = router