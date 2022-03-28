import styles from './experience.module.css';
import Image from 'next/image';


const Experience = () => {
    return <div className={styles.container}>
        <div className={styles.cover}>
            <div className={styles.first_div}>
                <div className={styles.img}>
                    <Image src='/static/mymy.jpg' alt='myimage' width={250} height={200}></Image>
                </div>
                <h2 className={styles.h1}>A Fun Project</h2>
                <p className={styles.para2}> This is sort of a fun project i created some time ago just because i am a big fan of kanye west so i used his API </p>
                <p className={styles.para3}> This projects accepts login inputs and uses the data to serve the client</p>
                <a className={styles.tester} target='blank' href="https://my-portfolio-wine-eight.vercel.app/" > click here to test it out</a>
            </div>
        </div>
        <div className={styles.cover1}>
            <div className={styles.second_div}>
                <p className={styles.para1}> most of my projects and upcoming projects will be listed here , please watch out for this space as in the coming future it will be packed with projects upon projects</p>
            </div>
        </div>
    </div>
}

export default Experience;