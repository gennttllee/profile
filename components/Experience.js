import styles from './experience.module.css';

import projectList from '../components/projectList'
import Projects from '../components/Projects';


const Experience = () => {
    return <div className={styles.div}>
        {projectList.map((item, index)=> <Projects 
            key = {index}
            name = {item.h1}
            image = {item.image}
            about = {item.about}
            skills = {item.skills}
            link = {item.link}
        />)}
    </div>
}

export default Experience;