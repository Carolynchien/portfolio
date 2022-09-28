import styles from '../../styles/ProjectBox.module.css'
import Link from 'next/link'
import { useEffect, useContext } from 'react'
import Aos from 'aos'

import { ProjectContext } from '../../context/projectContext'
import 'aos/dist/aos.css'

export default function ProjectBox({ project }) {
  const { setSelectedProject, viewProjectDetail, setViewProjectDetail } =
    useContext(ProjectContext)
  const { image, name, description, video } = project

  useEffect(() => {
    Aos.init({ duration: 2500 })
  }, [])

  const getDetails = (project) => {
    setSelectedProject(project)
    setViewProjectDetail(true)
  }
  console.log(viewProjectDetail)

  return (
    <div className={styles.projectBoxmainContainer} data-aos="zoom-in-down">
      <div className={styles.imageBox}>
        {image === '' ? (
          <video
            src={video}
            type="video/mp4"
            autoPlay={true}
            muted={true}
            loop={true}
          />
        ) : (
          <img src={image.src} />
        )}
      </div>
      <div className={styles.nameBox}>
        <h3>{name}</h3>

        <h4 onClick={() => getDetails(project)}>Learn More...</h4>
      </div>
      <div className={styles.descriptionBox}>
        <h4>{description}</h4>
      </div>
    </div>
  )
}
