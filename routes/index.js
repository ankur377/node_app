const express = require("express");
const router = express.Router();
const checkAge = require('../middleware/checkAge');
const showList = require('../controllers/Auth/user');
const login = require('../controllers/Auth/loginController');
const register = require('../controllers/Auth/registerController');
const pdfControll = require('../controllers/pdfController');


// TODO:GET ROUTE
router.get("/", checkAge, showList.getAllRecord);

// TODO:LOGIN ROUTE
router.post("/login", login.loginController);


// TODO:REGISTER ROUTE
router.post('/register', register.registerController);

router.get('/userLists', pdfControll.pdfController);

module.exports = router