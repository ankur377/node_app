const express = require("express");
const router = express.Router();
const db = require('../helper/database');
const UserList = require('../models/userList');


router.get('/UserLists', (req, res) => {
    UserList.find().then((result) => {
        res.send(result);
        console.warn(result);
    });
});

module.exports = router;
