import icons from '../../assets/icon'
import styles from '../../styles/skills.module.css'
export default function Skills() {
  return (
    <div className={styles.skillmaincontainer}>
      <div className={styles.skillSecondContainer}>
        {/* <div className={styles.animationcontainer}>
          <div className={styles.pContainer}>
            <p>Skills Skills Skills Skills Skills Skills Skills Skills</p>
            <p>Skills Skills Skills Skills Skills Skills Skills Skills</p>
            <p>Skills Skills Skills Skills Skills Skills Skills Skills</p>
            <p>
              Skills Skills Skills Skills Skills Skills Skills
              Skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          </div>
        </div> */}
        <div className={styles.iconscontainer}>
          {icons.map((icon, index) => (
            <div className={styles.image} key={index}>
              <img src={icon.image.src} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
