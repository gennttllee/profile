import Image from 'next/image';
import styles from './contacts.module.css'

const Contacts = () => {
    return <div>
        <button className={styles.divider}>
            <a target='blank' href='https://web.facebook.com/marckwilliamz'>
                <Image src='/static/facebook.jpg' alt='facebook' width={30} height={35}></Image>
            </a>
        </button>
        <button className={styles.divider}>
            <a target='blank' href='https://www.instagram.com/mark_williams_mw/'>
                <Image src='/static/instagram.jpg' alt='instagram' width={30} height={35}></Image>
            </a>
        </button>
        <button className={styles.divider}>
            <a target='blank' href='https://www.linkedin.com/in/malachi-udonkenta-98a77398/'>
                <Image src='/static/linkedin.png' alt='linkedin' width={30} height={35}></Image>
            </a>
        </button>
        <button className={styles.divider}>
            <a target='blank' href='https://wa.me/08108456793'>
                <Image  src='/static/whatsapp.jpg' alt='whatsapp' width={30} height={35}></Image>
            </a>
        </button>
    </div>
}

export default Contacts;