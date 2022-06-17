
import styles from '../components/pictures.module.css';

export default function Pictures() {
    return (
        <div className={styles.projects}>
                <img className={styles.image} src='/static/upload1.jpeg' alt='shopper'  />
                <img className={styles.image} src='/static/upload3.jpeg' alt='shopper'  />
                <img className={styles.image} src='/static/upload2.jpeg' alt='shopper' />
                <img className={styles.image} src='/static/upload4.jpeg' alt='shopper'  />
                <img className={styles.image} src='/static/upload5.jpeg' alt='shopper'  />
        </div>
    )
}
