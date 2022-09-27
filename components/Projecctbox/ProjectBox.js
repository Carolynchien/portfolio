import styles from '../../styles/ProjectBox.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function ProjectBox({ image, description, name, video }) {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  return (
    <div className={styles.projectBoxmainContainer} data-aos="flip-up">
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

        <Link href="/projectdetails">
          <a className="nav-link-detail">Details</a>
        </Link>
      </div>
      <div className={styles.descriptionBox}>
        <h4>{description}</h4>
      </div>
    </div>
  )
}
