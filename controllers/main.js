const db = require('../helper/database')
const User = require('../models/users');


exports.getAllRecord = (req, res) => {
    User.find().then((result) => {
        res.status(200).json(result);
    })
}