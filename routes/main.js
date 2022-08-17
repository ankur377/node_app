const express = require("express");
const router = express.Router();
let bodyparser = require('body-parser');
let jsonparser = bodyparser.json();
const checkAge = require('../middleware/checkAge');
const showList = require('../controllers/main');
const login = require('../controllers/loginController');
const register = require('../controllers/registerController');


// TODO:GET ROUTE
router.get("/", checkAge, showList.getAllRecord);

// TODO:LOGIN ROUTE
router.post("/login",jsonparser,login.logincontroller);


// TODO:REGISTER ROUTE
router.post('/register',jsonparser,register.registerController);


module.exports = router