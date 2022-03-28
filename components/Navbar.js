import Image from 'next/image'
import styles from './navbar.module.css'
import {useState} from 'react'


const Navbar = () => {
    const [scrol, setScrol] = useState(false)

    const menu = () => {
        let x = document.getElementById('container')
        if (x.className === styles.container) {
            x.className = styles.responsive
        } else { x.className = styles.container }
    }

    const collapse = () => {
        let y = document.getElementById('container')
        if (y.className === styles.responsive) {
            setTimeout(() => {
                if (y.className === styles.slide_back) {
                    y.className = styles.container
                }
            }, 500);
            y.className = styles.slide_back
        } else { y.className = styles.responsive }
    }

    return <div id='container' className={styles.container}>
        <div className={styles.img}>
            <Image src='/static/img-1.jpg' alt='myimage' width={50} height={50}></Image>
        </div>
        <ul id='list' className={styles.list}>
            <li className={styles.list_items}>
                <a href='#home'>Home</a>
            </li>
            <li className={styles.list_items}>
                <a href='#features'>What i do</a>
            </li>
            <li className={styles.list_items}>
                <a href='#resume'>Resume</a>
            </li>
            <li className={styles.list_items}>
                <a href='#forms'> Contact Me</a>
            </li>
        </ul>
        <button id='menu' onClick={menu} className={styles.btn_menu}>
            <span className="material-icons">density_medium</span>
        </button>
        <button id='collapse' onClick={collapse} className={styles.btn_close}>
            <span className="material-icons">close</span>
        </button>
    </div>
}

export default Navbar;