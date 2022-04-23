import Image from 'next/image'
import styles from './navbar.module.css'
import Contacts from './Contacts'
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 500) {
            setShow(false)
        } else { setShow(true) }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    },[]);

    const menu = () => {
        let x = document.getElementById('container')
        if (x.className === styles.container || x.className === styles.believe) {
            x.className = styles.responsive
        } else { x.className = styles.container }
    }

    const collapse = () => {
        let y = document.getElementById('container')
        if (y.className === styles.responsive) {
            setTimeout(() => {
                if (y.className === styles.slide_back && show) {
                    y.className = styles.believe
                } else if (y.className === styles.slide_back && show===false){
                    y.className = styles.container
                }
            }, 600);
            y.className = styles.slide_back
        } else { y.className = styles.responsive }
    }

    const collapsed = () => {
        let y = document.getElementById('container')
        if (y.className == styles.container) {
            y.className = styles.container
        } else if (y.className == styles.responsive) {
            setTimeout(() => {
                if (y.className === styles.slide_back && show ) {
                    y.className = styles.believe
                } else  if (y.className === styles.slide_back && show===false ) {
                    y.className = styles.container
                }
            }, 500);
            y.className = styles.slide_back
        }
    }

    return <div id='container' className={ show ? styles.believe :styles.container}>
        <div className={styles.img}>
            <Image src='/static/img-1.jpg' alt='myimage' width={50} height={50}></Image>
        </div>
        <div className={styles.image2}>
            <Image src='/static/crop.jpeg' alt='myimage' width={250} height={250}></Image>
        </div>
        <ul id='list' className={styles.list}>
            <li onClick={collapsed} className={styles.list_items}>
                <a href='#home'>Home</a>
            </li>
            <li onClick={collapsed} className={styles.list_items}>
                <a href='#features'>What i do</a>
            </li>
            <li onClick={collapsed} className={styles.list_items}>
                <a href='#resume'>Resume</a>
            </li>
            <li onClick={collapsed} className={styles.list_items}>
                <a href='#forms'> Contact Me</a>
            </li>
        </ul>
        <button id='menu' onClick={menu} className={styles.btn_menu}>
            <span className="material-icons">density_medium</span>
        </button>
        <button id='collapse' onClick={collapse} className={styles.btn_close}>
            <span className="material-icons">close</span>
        </button>
        <div className={styles.socials}>
            <p className={styles.texter}> Connect With Me: </p>
            <Contacts />
        </div>
    </div>
}

export default Navbar;