import styles from './experience.module.css';
import Image from 'next/image';


const Experience = () => {
    return <div className={styles.container}>
        <div className={styles.cover}>
            <div className={styles.first_div}>
                <div className={styles.img}>
                    <Image src='/static/shopper.jpg' alt='my-image' width={250} height={200}></Image>
                </div>
                <h2 className={styles.h1}>My Shopper App</h2>
                <p className={styles.para2}> I built this App because i got tired of many note pad apps not including calculators. </p>
                <p className={styles.para3}> This project takes user inputs, creates a local database and saves all input and calculations to a history folder</p>
                <a className={styles.tester} target='blank' href="https://shopper-gennttllee.vercel.app/" > click here to test it out</a>
            </div>
        </div>
        <div className={styles.cover}>
            <div className={styles.first_div}>
                <div className={styles.img}>
                    <Image src='/static/mymy.jpg' alt='my-image' width={250} height={200}></Image>
                </div>
                <h2 className={styles.h1}>Kanye Quotes</h2>
                <p className={styles.para2}> This is a fun project I created some time ago because i am a big fan of kanye west. I used his API </p>
                <p className={styles.para3}> This projects accepts login inputs and uses the data to serve the client</p>
                <a className={styles.tester} target='blank' href="https://my-portfolio-wine-eight.vercel.app/" > click here to test it out</a>
            </div>
        </div>
        <div className={styles.cover1}>
            <div className={styles.second_div}>
                <p className={styles.para1}> Most of my projects and upcoming projects will be listed here. Please watch this space: in the coming future it will be packed with projects upon projects</p>
            </div>
        </div>
    </div>
}

export default Experience;