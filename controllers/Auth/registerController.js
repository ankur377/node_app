const db = require('../../helper/database')
const { User } = require('../../models/index');
const bcrypt = require('bcrypt');


exports.registerController = function (req, res) {
    User.find({ email: req.body.email })
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Mail Exists'
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    } else {
                        const user = new User({
                            name: req.body.name,
                            email: req.body.email,
                            address: req.body.address,
                            password: hash
                        });
                        user.save().then((result) => {
                            res.send(result);
                        }).catch((error) => { res.send(error) })
                    }
                });
            }
        })
        .catch((error) => {
            res.send(error);
        });
}