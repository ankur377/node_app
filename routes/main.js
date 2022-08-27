const express = require("express");
const router = express.Router();
const checkAge = require('../middleware/checkAge');
const showList = require('../controllers/main');
const login = require('../controllers/loginController');
const register = require('../controllers/registerController');
const pdfcontroll = require('../controllers/pdfcontroller');


// TODO:GET ROUTE
router.get("/", checkAge, showList.getAllRecord);

// TODO:LOGIN ROUTE
router.post("/login",login.logincontroller);


// TODO:REGISTER ROUTE
router.post('/register',register.registerController);

router.get('/userLists',pdfcontroll.pdfcontroller);

module.exports = router