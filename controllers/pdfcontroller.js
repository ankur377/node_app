require('dotenv').config();
var pdf = require("pdf-creator-node");
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '../public/template.html'), 'utf-8');
const db = require('../helper/database');
const { userDetail } = require('../models/index');
const options = require('../helper/options');
var nodeMailer = require('nodemailer');


exports.pdfController = async (req, res) => {
    userDetail.find().lean().then(async (result) => {
        const fileName = Math.random() + '_doc' + '.pdf';

        let user = result;
        var document = {
            html: html,
            data: {
                users: user,
            },
            path: './docs/' + fileName,
            type: "",
        };
        await pdf
            .create(document, options)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            });
        res.send(result);
        var transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        var mailOptions = {
            from: 'ranparaankur2853@gmail.com',
            to: 'ranparaankur07@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!',
            attachments: [
                {   // utf-8 string as an attachment
                    filename: fileName,
                    content: fs.createReadStream(path.join(__dirname, '../docs/' + fileName))
                    //TODO: reference https://nodemailer.com/message/attachments/
                    // contentType: 'application/pdf',
                    // path: path.join(__dirname, '../docs/' + fileName)
                }
            ]
        };

        transporter.sendMail(mailOptions, function (error, success) {
            if (error) {
                console.log(error);
                console.log(path.join(__dirname, '../docs/' + fileName));
            } else {
                console.log('Email successFully send');
            }
        });
    });
}
