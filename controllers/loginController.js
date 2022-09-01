const db = require('../helper/database')
const User = require('../models/users');
const bcrypt = require('bcrypt');

exports.loginController = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        res.send("This User Is Not Found");
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send("successFully Login");
        } else {
            res.send("Your Password is Wrong");
        }
    } catch {
        res.status(500).send()
    }
}