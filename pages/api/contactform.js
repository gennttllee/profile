const nodemailer = require('nodemailer');

export default function send(req, res) {
    const transporter = nodemailer.createTransport({
        service :'gmail',
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        secure: true
    })

    const mailData = {
        from:process.env.EMAIL,
        to: process.env.UDO,
        subject: req.body.subject,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p> <p>Name : ${req.body.fname} ${req.body.lname}</p> <p> Telephone : ${req.body.number}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })

    res.status(200)
};