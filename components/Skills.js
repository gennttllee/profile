import styles from './skills.module.css'

const Skills = () => {
    return <div className={styles.main}>
        <div className={styles.cover}>
            <div className={styles.divider}>
                <p className={styles.p1}> features</p>
                <h1 className={styles.h1}> Development Skills</h1>
                <p className={styles.html}>HTML <span className={styles.span1}>95%</span></p>
                <div className={styles.div1}>
                    <div className={styles.jnr1}></div>
                </div>
                <p className={styles.html}>CSS <span className={styles.span2}>85%</span></p>
                <div className={styles.div2}>
                    <div className={styles.jnr2}></div>
                </div>
                <p className={styles.html} >JAVASCRIPT <span className={styles.span3} >75%</span></p>
                <div className={styles.div3}>
                    <div className={styles.jnr3}></div>
                </div>
                <p className={styles.html} >REACT.JS <span className={styles.span4} >85%</span></p>
                <div className={styles.div4}>
                    <div className={styles.jnr4}></div>
                </div>
                <p className={styles.html} >NEXT.JS <span className={styles.span5} >65%</span></p>
                <div className={styles.div5}>
                    <div className={styles.jnr5}></div>
                </div>
            </div>
        </div>
        <div className={styles.cover1}>
        <div className={styles.divider1}>
            <p className={styles.p1}> features</p>
            <h1 className={styles.h1}>  Personal Attributes</h1>
            <p className={styles.html}>Problem Solving <span className={styles.span1}>95%</span></p>
            <div className={styles.div1}>
                <div className={styles.jnr1}></div>
            </div>
            <p className={styles.html}>Multitasking <span className={styles.span2}>85%</span></p>
            <div className={styles.div2}>
                <div className={styles.jnr2}></div>
            </div>
            <p className={styles.html} >Punctuality <span className={styles.span3} >75%</span></p>
            <div className={styles.div3}>
                <div className={styles.jnr3}></div>
            </div>
            <p className={styles.html} >Hard-work <span className={styles.span4} >85%</span></p>
            <div className={styles.div4}>
                <div className={styles.jnr4}></div>
            </div>
            <p className={styles.html} >Team Leader <span className={styles.span5} >65%</span></p>
            <div className={styles.div5}>
                <div className={styles.jnr5}></div>
            </div>
        </div>
        </div>
    </div>
}

export default Skills;