import Card from './card'
import styles from './section2.module.css'

const Section2 =()=>{
    return <div className={styles.container} id='features'>
        <p className={styles.para1}>FEATURES</p>
        <h1 className={styles.h1}>What I Do</h1>
        <Card
            spanny ='devices'
            h1='React.js'
            p1 = 'I build complex, dynamic and responsive user interfaces with react.js. React.js is a javascript front-end library'
        />
        <Card
            spanny ='checklist_rtl'
            h1 ='Next.js'
            p1 = 'Next.js is a fullstack react framework for web development. It adds extra features to what react already does well.'
        />
        <Card
            spanny = 'language'
            h1 = 'Html, Css & Javascript '
            p1 = 'These are the core technologies for web development. As a developer these technologies are essential as they are the foundation of web development'
        />
    </div>
}

export default Section2;