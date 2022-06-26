import styles from './forms.module.css'
import Image from 'next/image'
import Contacts from './Contacts'
import emailjs from 'emailjs-com';
import { useState, useEffect } from 'react'


const Forms = () => {
    const [shows, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 2000 && window.innerWidth > 600) {
            setShow(true)
        } else if (window.scrollY < 3500 && window.innerWidth < 600) {
            setShow(false)
        } else if (window.scrollY > 3500 && window.innerWidth < 600) {
            setShow(true)
        } else { setShow(false) }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, []);


    const submitted = (e) => {
        e.preventDefault();
        emailjs.sendForm( 'markwilliamz1995@gmail.c', "template_a2ul24s", e.target, "jyIO1gciS2IyWyp9M")
            .then((result) => {
                console.log(result.text);
                alert('successful')
            }, (error) => {
                console.log(error.text);
                alert('error not sent')
            });
        e.target.reset();
    }
    return <div className={styles.main_div} id="forms">
        <p className={styles.contact}>CONTACT</p>
        <h2 className={styles.me}>Contact Me</h2>
        <div className={styles.cover}>
            <div className={shows ? styles.container : styles.nemesis}>
                <div className={styles.img}>
                    <Image src='/static/form.jpg' alt='myimage' priority='true' width={450} height={450}></Image>
                </div>
                <h2 className={styles.h1}>Mark Williams</h2>
                <p className={styles.p}>Chief Operating Officer</p>
                <p className={styles.p1}>I am available for freelance work contact me via any of the channels below</p>
                <p className={styles.p2}>Phone: +2348020761320</p>
                <p className={styles.p2}>Email: Udooto72@gmail.com</p>
                <p className={styles.alt}> Alternatively :</p>
                <Contacts />
            </div>
            <div className={shows ? styles.container1 : styles.nemesis}>
                <form onSubmit={submitted} >
                    <div className={styles.late}>
                        <label htmlFor='name' className={styles.label} >Full name</label>
                        <input className={styles.first} type='text' placeholder='First name' name='fname' required></input>
                        <input className={styles.last} type='text' placeholder='Last name' name='lname' required></input>
                    </div>
                    <label htmlFor='number' className={styles.label1}>Phone number</label>
                    <input className={styles.text} type='tel' name='number' placeholder='Phone number'></input>
                    <label htmlFor='email' className={styles.label1}>Email</label>
                    <input className={styles.text} type='email' placeholder='Email' name='email' required></input>
                    <label htmlFor='subject' className={styles.label1}>Subject</label>
                    <input className={styles.text} type='text' placeholder='Subject' name='subject'></input>
                    <label htmlFor='message' className={styles.label1}>Your message</label>
                    <textarea className={styles.area} placeholder='Type your message here' name="message" required></textarea>
                    <input className={styles.btn} type='submit' value='Send' />
                </form>
            </div>
        </div>
    </div>
}

export default Forms;

