import styles from '../../styles/ProjectDetail.module.css'
import CardSlider from '../CardSlider/CardSlider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useContext } from 'react'

import { ProjectContext } from '../../context/projectContext'

export default function ProjectDetail() {
  const { selectedProject, setViewProjectDetail, viewProjectDetail } =
    useContext(ProjectContext)
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  const closeProjectDetails = () => {
    setViewProjectDetail(false)
  }
  console.log(viewProjectDetail)
  return (
    viewProjectDetail && (
      <div className={styles.main} data-aos="zoom-in-down">
        <CardSlider selectedProject={selectedProject} />

        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
            <h2>{selectedProject && selectedProject.name}</h2>
            <p>{selectedProject && selectedProject.description}</p>
          </div>
          <div className={styles.description}>
            <p>{selectedProject && selectedProject.fullDescription}</p>
          </div>
          <div className={styles.skills}>
            {selectedProject &&
              selectedProject.skills.map((skill, index) =>
                index === selectedProject.skills.length - 1 ? (
                  <span key={index}>{`${skill} `}</span>
                ) : (
                  <span key={index}>{`${skill}/ `}</span>
                )
              )}
          </div>
          <a
            target="blank"
            href={
              selectedProject.deployLink === ''
                ? ''
                : selectedProject.deployLink
            }
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className={styles.icon}
            />
            {selectedProject.deployLink === ''
              ? 'Working on deployment'
              : 'VIEW SITE'}
          </a>
          <FontAwesomeIcon
            icon={faX}
            className={styles.faX}
            onClick={closeProjectDetails}
          />
          <a target="blank" href={selectedProject.github}>
            GITHUB
          </a>
        </div>
      </div>
    )
  )
}
