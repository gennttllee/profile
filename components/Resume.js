import styles from './resume.module.css'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import { useState, useEffect, useRef } from 'react'

const Resume = () => {
    const [show1, setShow] = useState(true)
    const myRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setShow(entry.isIntersecting)
        })
        observer.observe(myRef.current);
    }, []);

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

    return <div ref={myRef} className={ styles.container} id='resume'>
        <p  className={styles.p1} >EXPERIENCE</p>
        <h1 className={styles.h1} >My Resume</h1>
        <div className={show1 ? styles.diver : styles.nemesis}>
            <button onClick={btn1} className={styles.btn}>Education</button>
            <button onClick={btn2} className={styles.btn}>Skills</button>
            <button onClick={btn3} className={styles.btn}>Experience</button>
        </div>
        <div className={show1 ? styles.load_div : styles.nemesis}>
            {meme}
        </div>
    </div>
}

export default Resume;