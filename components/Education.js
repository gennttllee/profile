import styles from './education.module.css'

const Education = () => {
    return <div className={styles.container}>
    <div className={styles.over}>
    <div className={styles.first_div}>
            <div className={styles.brac1}>
                <h2 className={styles.heady}>N.O.University Of Nigeria</h2>
                <p>2018 - 2022 </p>
                <p>Bsc Economics</p>
                <p> B.Sc</p>
            </div>
            <div className={styles.brac2}>
                <h2 className={styles.heady} >Competent School</h2>
                <p>2006 - 2013 </p>
                <p>W.A.S.S.C.E </p>
                <p>N.E.C.O</p>
            </div>
        </div>
    </div>
    <div className={styles.over1}>
    <div className={styles.second_div}>
            <div className={styles.brac3}>
                <h2 className={styles.heady} >Udemy</h2>
                <p>2019 - 2021 </p>
                <p>Full stack web development</p>
                <p>Certificate of Completion</p>
            </div>
            <div className={styles.brac4}>
                <h2 className={styles.heady} >Udemy</h2>
                <p>2021 - 2022 </p>
                <p>Next.js Course</p>
                <p>Certificate of Completion</p>
            </div>
        </div>
    </div>
    <div className={styles.over1}>
    <div className={styles.third_div}>
            <div className={styles.brac3}>
                <h2 className={styles.heady} >Udemy</h2>
                <p>2019 - 2021 </p>
                <p>100 days of Python code</p>
                <p>Certificate of Completion</p>
            </div>
            <div className={styles.brac4}>
                <h2 className={styles.heady} >Udemy</h2>
                <p>2021 - 2022 </p>
                <p>Advanced Css crash course</p>
                <p>Certificate of Completion</p>
            </div>
        </div>
    </div>
    </div>
}

export default Education;