import icons from '../../assets/icon'
import styles from '../../styles/skills.module.css'
export default function Skills() {
  return (
    <div className={styles.skillmaincontainer}>
      <div className={styles.iconscontainer}>
        {icons.map((icon, index) => (
          <div className={styles.image} key={index}>
            <img src={icon.image.src} />
          </div>
        ))}
      </div>
    </div>
  )
}
