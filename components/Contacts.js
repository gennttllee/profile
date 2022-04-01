import Image from 'next/image';
import styles from './contacts.module.css'

const Contacts = () => {
    return <div>
        <button className={styles.divider}>
            <a target='blank' href='https://web.facebook.com/marckwilliamz'>
            <span className="fa-brands fa-facebook-f"></span>
            </a>
        </button>
        <button className={styles.divider1}>
            <a target='blank' href='https://www.instagram.com/mark_williams_mw/'>
            <span className="fa-brands fa-instagram"></span>
            </a>
        </button>
        <button className={styles.divider2}>
            <a target='blank' href='https://www.linkedin.com/in/malachi-udonkenta-98a77398/'>
            <span className="fa-brands fa-linkedin-in"></span>
            </a>
        </button>
        <button className={styles.divider3}>
            <a target='blank' href='https://wa.me/08108456793'>
            <span className="fa-brands fa-whatsapp"></span>
            </a>
        </button>
    </div>
}

export default Contacts;