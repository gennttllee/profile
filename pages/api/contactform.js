
import { SMTPClient } from 'emailjs';


export default function handler(req, res) {

    const { email } = req.body;
    // console.log(process.env)

    const client = new SMTPClient({
        user: 'markwilliamz1995@gmail.com',
        password: '7t2j/9:g',
        host: 'smtp.gmail.com',
        ssl: true
    });

    try {
        client.send(
            {
                from: "markwilliamz1995@gmail.com",
                to: 'udooto72@gmail.com',
                subject: req.body.subject,
                text:`${req.body.message}
                Sent from: ${ req.body.fname} ${ req.body.lname}
                Phone number: ${ req.body.number}
                Email address: ${req.body.email}`,
            }
        )
    }
    catch (e) {
        res.status(400).end(JSON.stringify({ message: "Error" }))
        return;
    }

    res.status(200).end(JSON.stringify({ message: 'Send Mail' }))
}