import styles from './forms.module.css'
import Image from 'next/image'
import Contacts from './Contacts'
import { useState } from 'react'


const Forms = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
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
                <form>
                    <label htmlFor='name' className={styles.label} >Full name</label>
                    <input className={styles.first} onChange={(e) => { setFname(e.target.value) }} type='text' name='name' placeholder='first name' required></input>
                    <input className={styles.last} onChange={(e) => { setLname(e.target.value) }} type='text' placeholder='last name' required></input>
                    <label htmlFor='number' className={styles.label1}>Phone number</label>
                    <input className={styles.text} type='tel' onChange={(e) => { setNumber(e.target.value) }} name='number' placeholder='Phone number'></input>
                    <label htmlFor='email' className={styles.label1}>Email</label>
                    <input className={styles.text} type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' name='email' required></input>
                    <label htmlFor='subject' className={styles.label1}>Subject</label>
                    <input className={styles.text} type='text' onChange={(e) => { setSubject(e.target.value) }} placeholder='subject' name='subject'></input>
                    <label htmlFor='message' className={styles.label1}>Your message</label>
                    <textarea className={styles.area} onChange={(e) => { setMessage(e.target.value) }} name="message" required></textarea>
                    <input className={styles.btn} type='submit' onClick={(e)=>{handleSubmit(e)}}/>
                </form>
            </div>
        </div>
    </div>
}

export default Forms;