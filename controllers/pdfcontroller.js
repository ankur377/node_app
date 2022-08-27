var pdf = require("pdf-creator-node");
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '../public/template.html'), 'utf-8');
const db = require('../helper/database');
const userDetail = require('../models/userList');
const options = require('../helper/options');


exports.pdfcontroller = async (req, res) => {
    userDetail.find().lean().then((result) => {
        const filename = Math.random() + '_doc' + '.pdf';

        let user = result;
        var document = {
            html: html,
            data: {
                users: user,
            },
            path:'./docs/' + filename,
            type: "",
        };
        pdf
            .create(document, options)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            });
        res.send(result);
    });
}
