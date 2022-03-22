import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
    let d = new Date();
    const year = d.getFullYear();
    return <div className={styles.main} id='footer'>
        <div className={styles.img}>
            <Image src='/static/img-1.jpg' alt='myimage' width={70} height={70}></Image>
        </div>
        <h1 className={styles.h1}> Mark Williams</h1>
        <p className={styles.p1}> <span className='material-icons'> copyright</span> {year}  All rights reserved by Mark Williams</p>
    </div>
};

export default Footer;