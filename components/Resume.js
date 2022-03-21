import styles from './resume.module.css'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import { useState } from 'react'

const Resume = () => {
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

    return <div id='resume'>
        <p className={styles.p1} >EXPERIENCE</p>
        <h1 className={styles.h1} >My Resume</h1>
        <div className={styles.diver}>
            <button onClick={btn1} className={styles.btn}>Education</button>
            <button onClick={btn2} className={styles.btn}>Skills</button>
            <button onClick={btn3} className={styles.btn}>Experience</button>
        </div>
        <div className={styles.load_div}>
            {meme}
        </div>
    </div>
}

export default Resume;