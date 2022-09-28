import styles from '../../styles/Slider.module.css'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function CardSlider({ selectedProject }) {
  const slideLeft = () => {
    const slider = document.querySelector('.slider')
    slider.scrollLeft = slider.scrollLeft - 720
  }

  const slideRight = () => {
    const slider = document.querySelector('.slider')
    console.log(slider)
    slider.scrollLeft = slider.scrollLeft + 720
  }

  return (
    <div className={styles.mainSliderContainer}>
      <div className={`${styles.leftBtn} ${styles.btn}`} onClick={slideLeft}>
        <FontAwesomeIcon icon={faAnglesLeft} />
      </div>
      <div className={`slider ${styles.slider}`}>
        {selectedProject &&
          selectedProject.imageCollection.map((img) => (
            <div className={styles.imageContainer}>
              <img src={img.src} />
            </div>
          ))}
      </div>

      <div className={`${styles.rightBtn} ${styles.btn} `} onClick={slideRight}>
        <FontAwesomeIcon icon={faAnglesRight} />
      </div>
    </div>
  )
}
