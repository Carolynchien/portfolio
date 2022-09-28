import styles from '../../styles/Project.module.css'
import projects from '../../assets/projects'
import ProjectBox from '../Projecctbox/ProjectBox'

export default function Projects() {
  console.log(projects)
  return (
    <div className={styles.mainContainer}>
      <div className={styles.projectscontainer}>
        {projects.map((project, index) => (
          <ProjectBox project={project} />
        ))}
      </div>
    </div>
  )
}
