import React from 'react'
import styles from '../styles/ProjectDetails.module.css'
import projects from '../assets/projects'
import Link from 'next/link'
export default function ProjectDetails() {
  return (
    <div className={styles.projectMcontainer}>
      <div className={styles.projectScontainer}>
        {/* <h1>Project Details</h1> */}
        <div className={styles.projectTcontainer}>
          <div className={styles.title}>
            <h3>Project</h3>
            <h3>Description</h3>
            <h3>Skills</h3>
            <h3>Deployment</h3>
            <h3>GitHub</h3>
          </div>
          <div className={styles.projectFcontainer}>
            {projects.map((project) => (
              <div className={styles.projectDetailsContainer}>
                <div className={styles.contentContainer}>
                  {project.name}
                  <div className={styles.projectImgContainer}>
                    {project.image === '' ? (
                      <video
                        src={project.video}
                        type="video/mp4"
                        autoPlay={true}
                        muted={true}
                        loop={true}
                      />
                    ) : (
                      <img src={project.image.src} />
                    )}
                  </div>
                </div>
                <div className={styles.contentContainer}>
                  <p>{project.description}</p>
                </div>
                <div className={styles.contentContainer}>
                  {project.skills.map((skill) => (
                    <p>{`${skill},`}</p>
                  ))}
                </div>
                <div className={styles.contentContainer}>
                  {project.deployLink === '' ? (
                    <p>Working on deployment...</p>
                  ) : (
                    <Link href={project.deployLink}>
                      <a className="nav-link">{project.deployLink}</a>
                    </Link>
                  )}
                </div>
                <div className={styles.contentContainer}>
                  <Link href={project.github}>
                    <a className="nav-link">{project.github}</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
