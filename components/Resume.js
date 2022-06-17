import styles from './resume.module.css'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import { useState, useEffect } from 'react'
import Pictures from './Pictures'

const Resume = () => {
    const [show1, setShow1] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 2000 && window.innerWidth < 600) {
            setShow1(true)
        }else if (window.scrollY > 1000 && window.innerWidth > 600){
            setShow1(true)
        } else { setShow1(false) }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    },[]);

    const [meme, setBox] = useState(<Skills />)
    const btn1 = () => {
        setBox(<Education />)
    }

    const btn2 = () => {
        setBox(<Skills />)
    }

    const btn3 = () => {
        setBox(<Experience />)
    }

    const btn4 = () => {
        setBox(<Pictures />)
    }

    return <div  className={ styles.container} id='resume'>
        <p  className={styles.p1} >EXPERIENCE</p>
        <h1 className={styles.h1} >My Resume</h1>
        <div className={show1 ? styles.diver : styles.nemesis}>
            <button onClick={btn1} className={styles.btn}>Education</button>
            <button onClick={btn2} className={styles.btn}>Skills</button>
            <button onClick={btn3} className={styles.btn}>Experience</button>
            <button onClick={btn4} className={styles.btn}>Pictures</button>
        </div>
        <div className={show1 ? styles.load_div : styles.nemesis}>
            {meme}
        </div>
    </div>
}

export default Resume;