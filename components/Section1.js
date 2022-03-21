import styles from './section1.module.css'


const Section1 = () => {
    return <div className={styles.container} id='home'>
        <h1 className={styles.h1}>
            <div className={styles.empt}></div>
            <span className={styles.span1}>MARK</span>
            <span className={styles.span2}>WILLIAMS</span>
        </h1>
        <div className={styles.main_div}>
            <div className={styles.first_div}>
                <p>I am a</p>
            </div>
            <div className={styles.second_div}>
                <p className={styles.p1} >web developer</p>
            </div>
        </div>
        <button className={styles.btn}>
        <a className={styles.tag} href='#footer'> Contact Me</a>
        </button>
    </div>
}

export default Section1;