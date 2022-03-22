import { getDomainLocale } from 'next/dist/shared/lib/router/router'

require('dotenv').config()

export default function send(req, res) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'markwilliamz1995@gmail.com',
            pass: process.env.PASSWORD,
        },
        secure: true,
    })

    const mailData = {
        from:"markwilliamz1995@gmail.com",
        to: 'udooto72@gmail.com',
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