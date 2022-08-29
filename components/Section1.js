import styles from './section1.module.css';


const Section1 = () => {
    return <div className={styles.container}  id='home'>
        <h1 className={styles.h1}>
            <div className={styles.empt}></div>
            <span className={styles.span1}>MARK</span>
            <span className={styles.span2}>WILLIAMS</span>
        </h1>
        <p className={styles.main_div}>
            <span className={styles.first_div}>
                <span>I am a</span>
            </span>
            <span className={styles.second_div}>
                <span className={styles.p1} >web developer</span>
            </span>
        </p>
        <button className={styles.btn}>
            <a className={styles.tag} href='#forms'> Contact Me</a>
        </button>
    </div>
}

export default Section1;