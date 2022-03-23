import styles from './forms.module.css'
import Image from 'next/image'
import Contacts from './Contacts'
import emailjs from 'emailjs-com';


const Forms = () => {
    const submitted = (e) => {
        e.preventDefault();
        emailjs.sendForm('markwilliamz1995@gmail.c', 'template_a2ul24s', e.target, 'jyIO1gciS2IyWyp9M')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
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
                <form onSubmit={submitted} >
                    <label htmlFor='name' className={styles.label} >Full name</label>
                    <input className={styles.first}  type='text' placeholder='first name' name='fname' required></input>
                    <input className={styles.last}  type='text' placeholder='last name' name='lname' required></input>
                    <label htmlFor='number' className={styles.label1}>Phone number</label>
                    <input className={styles.text} type='tel'  name='number'  placeholder='Phone number'></input>
                    <label htmlFor='email' className={styles.label1}>Email</label>
                    <input className={styles.text} type='email'  placeholder='Email'  name='email' required></input>
                    <label htmlFor='subject' className={styles.label1}>Subject</label>
                    <input className={styles.text} type='text'  placeholder='subject'  name='subject'></input>
                    <label htmlFor='message' className={styles.label1}>Your message</label>
                    <textarea className={styles.area} placeholder='Type your message here' name="message" required></textarea>
                    <input className={styles.btn} type='submit' value='send'  />
                </form>
            </div>
        </div>
    </div>
}

export default Forms;