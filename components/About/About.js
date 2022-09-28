import styles from '../../styles/About.module.css'
import profolio from '../../assets/profilePhoto.jpeg'

export default function About() {
  return (
    <div className={styles.about}>
      <img src={profolio.src}></img>
      <div className={styles.contentbox}>
        <p>
          I am a frontend and backend developer who focuses on writing
          optimized, efficient code.<br></br>I love building,structing dynamic
          projects, and enjoying translating theoretical knowledge into actual
          code.
        </p>
      </div>
    </div>
  )
}
