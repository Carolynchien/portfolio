import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import ProjectDetail from '../components/projectDetail/ProjectDetail'
import '@fortawesome/fontawesome-svg-core/styles.css'
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false /* eslint-disable import/first */
import Aos from 'aos'
import { useEffect, useContext } from 'react'
import projects from '../assets/projects'
import { ProjectContext } from '../context/projectContext'
import ProjectBox from '../components/Projecctbox/ProjectBox'
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1100 })
  }, [])
  const {
    selectedProject,
    setSelectedProject,
    viewProjectDetail,
    setViewProjectDetail
  } = useContext(ProjectContext)
  return (
    <div className={styles.container}>
      <Head>
        <title>Carolyn Portfolio</title>

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Aboreto&display=swap" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <header></header>

        <div className={styles.scrollable}>
          <div className={styles.introContainer}></div>
          <h2 className={styles.main}>
            <p>Hi! I&apos;m Carolyn</p> <p>A software Engineer </p>
            <p>based in Atlanta</p>
          </h2>
          <div className={styles.second}>
            <About></About>
          </div>
          <section className={styles.third}>
            <Skills></Skills>
          </section>
          <div className={styles.projectContainerthrid}>
            <div className={styles.projectContainer}>
              <h1>PROJECTS</h1>
              <ProjectDetail />
            </div>

            {/* {!viewProjectDetail ? <Projects /> : ''} */}
            <div className={styles.test} data-aos="fade-up-right">
              hello
            </div>
            {projects.map((project, index) => (
              <ProjectBox project={project} key={index} />
            ))}
          </div>

          {/* <div className={styles.introContainertwo}>jdjdjddd</div>
          <div className={styles.introContainer}>jddodo</div> */}
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
