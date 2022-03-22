import styles from './forms.module.css'
import Image from 'next/image'
import Contacts from './Contacts'
import { useState } from 'react'


const Forms = () => {
    const [fname, setFname] = useState('')
    const onFa = (e) => {
        setFname(e.target.value)
    }
    const [lname, setLname] = useState('')
    const onLa = (e) => {
        setLname(e.target.value)
    }
    const [number, setNumber] = useState('')
    const onNumb = (e) => {
        setNumber(e.target.value)
    }
    const [email, setEmail] = useState('')
    const onEma = (e) => {
        setEmail(e.target.value)
    }
    const [subject, setSubject] = useState('')
    const onSub = (e) => {
        setSubject(e.target.value)
    }
    const [message, setMessage] = useState('')
    const place = (e) => {
        setMessage(e.target.value)
    }
    const handleClick = () => {
        console.log('Sending')
        let data = {
            fname,
            lname,
            number,
            email,
            subject,
            message
        }
        fetch('/api/contactform', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setFname('')
                setLname('')
                setNumber('')
                setEmail('')
                setSubject('')
                setBody('')
            }
        })
    }
    return <div className={styles.main_div} id="forms">
        <p className={styles.contact}>CONTACT</p>
        <h2 className={styles.me}>Contact Me</h2>
        <div className={styles.cover}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <Image src='/static/form.jpg' alt='myimage' priority='true' width={390} height={330}></Image>
                </div>
                <h2 className={styles.h1}>Mark Williams</h2>
                <p className={styles.p}>Chief Operating Officer</p>
                <p className={styles.p1}>I am available for freelance work via any of the options provided</p>
                <p>Phone: +2348020761320</p>
                <p>Email: Udooto72@gmail.com</p>
                <p className={styles.alt}> Alternatively :</p>
                <Contacts />
            </div>
            <div className={styles.container1}>
                <label htmlFor='name' className={styles.label} >Full name</label>
                <input className={styles.first} onChange={onFa} type='text' name='name' placeholder='first name' value={fname} required></input>
                <input className={styles.last} onChange={onLa} type='text' placeholder='last name' value={lname} required></input>
                <label htmlFor='number' className={styles.label1}>Phone number</label>
                <input className={styles.text} type='tel' onChange={onNumb} name='number' value={number} placeholder='Phone number'></input>
                <label htmlFor='email' className={styles.label1}>Email</label>
                <input className={styles.text} type='email' onChange={onEma} placeholder='Email' value={email} name='email' required></input>
                <label htmlFor='subject' className={styles.label1}>Subject</label>
                <input className={styles.text} type='text' onChange={onSub} placeholder='subject' value={subject} name='subject'></input>
                <label htmlFor='message' className={styles.label1}>Your message</label>
                <textarea className={styles.area} placeholder='Type your message here' onChange={place} name="message" value={message} required></textarea>
                <input className={styles.btn} type='submit' onClick={handleClick} />
            </div>
        </div>
    </div>
}

export default Forms;