import styles from '../../styles/About.module.css'
import profolio from '../../assets/profilePhoto.jpeg'

export default function About() {
  return (
    <div className={styles.about}>
      <img src={profolio.src}></img>
      <div className={styles.contentbox}>
        <p>
          I am a frontend and backend developer who focus on writing optimized,
          efficient code.<br></br>I love building,structing dynamic projects,
          and enjoying translating theoretical knowledge into actual code. I
          always say there are so much more about coding that I dont know, but
          that means there are so much more that I can learn.
        </p>
      </div>
    </div>
  )
}
