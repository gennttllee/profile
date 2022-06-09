import Image from 'next/image';
import styles from '../components/projects.module.css';

export default function Projects(props) {
    return (
        <div className={styles.projects}>
            <div>
                <Image src={props.image} alt='shopper' width={250} height={200} />
            </div>
            <p className={styles.p}> <span className={styles.span}> Name :</span> {props.name}</p>
            <p className={styles.p}> <span className={styles.span}>About :</span>  {props.about}</p>
            <p className={styles.p}> <span className={styles.span}>Skills :</span> {props.skills}</p>
            <a className={styles.target} target='blank' href={props.link} > click here to test it out</a>
        </div>
    )
}
