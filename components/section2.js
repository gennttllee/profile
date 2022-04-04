import Card from './card'
import styles from './section2.module.css'
import { useState, useEffect } from 'react'

const Section2 = () => {
    const [show5, setShow5] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 500) {
            setShow5(true)
        } else { setShow5(false) }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    },[]);

    return <div  className={styles.container} id='features'>
        <p className={styles.para1}>FEATURES</p>
        <h1 className={styles.h1}>What I Do</h1>
        <div className={show5 ? styles.first_card : styles.nemesis} >
            <Card
                spanny='devices'
                h1='React.js'
                p1='I build complex, dynamic and responsive user interfaces with react.js. React.js is a javascript front-end library'
            />
        </div>
        <div className={show5 ? styles.third_card : styles.nemesis}>
            <Card
                spanny='checklist_rtl'
                h1='Next.js'
                p1='Next.js is a fullstack react framework for web development. It adds extra features to what react already does well.'
            />
        </div>
        <div className={show5 ? styles.fourth_card : styles.nemesis}>
            <Card
                spanny='language'
                h1='Html, Css & Javascript '
                p1='As a developer these technologies are essential as they are the foundation of web development'
            />
        </div>
    </div>
}

export default Section2;