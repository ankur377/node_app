const express = require("express");
const mongoose = require('mongoose');
const User = require('./models/users');
let bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
let jsonparser = bodyparser.json();
const app = express();
const port = 5000;
mongoose.connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.warn("connected");
});

// TODO:GET API

app.get("/", (req, res) => {
    User.find().then((result) => {
        res.status(200).json(result);
    })
});

// TODO:LOGIN API

app.post("/login", jsonparser, async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        res.send("This User Is Not Found");
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send("Successfuly Login");
        } else {
            res.send("Your Password is Wrong");
        }
    } catch {
        res.status(500).send()
    }
})

// TODO:REGISTER API

app.post('/register', jsonparser, function (req, res) {
    User.find({ email: req.body.email })
        .exec()
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



})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})
