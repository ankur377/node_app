var nodeMailer = require('nodemailer');

var transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ranparaankur2853@gmail.com',
        pass: 'pviisnnulfmwsmqs'
    }
});

var mailOptions = {
    from: 'ranparaankur2853@gmail.com',
    to: 'ranparaankur2853@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    attachments: [
        {   // utf-8 string as an attachment
            path: '../docs/0.35402950374270103_doc.pdf'
        }
    ]
};

transporter.sendMail(mailOptions, function () {
    console.log('Email sent: ');
});