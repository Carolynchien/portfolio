import styles from '../../styles/Project.module.css'
import projects from '../../assets/projects'
import ProjectBox from '../Projecctbox/ProjectBox'
import Aos from 'aos'
import { useEffect } from 'react'

import 'aos/dist/aos.css'
export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2500 })
  }, [])

  return (
    <div className={styles.mainContainer}>
      <div className={styles.projectscontainer}>
        {projects.map((project, index) => (
          <ProjectBox project={project} key={index} data-aos="flip-up" />
        ))}
      </div>
    </div>
  )
}
