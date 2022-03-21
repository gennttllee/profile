import styles from './card.module.css';

const Section2 = (props) => {
    return <div className={styles.cover}>
        <div className={styles.main_div}>
        <div className={styles.container}>
            <div className={styles.spanner}>
                <span className='material-icons '>{props.spanny}</span>
            </div>
            <h2 className={styles.h1}>{props.h1}</h2>
            <p className={styles.p1} >{props.p1} </p>
        </div>
    </div>
    </div>
};

export default Section2;