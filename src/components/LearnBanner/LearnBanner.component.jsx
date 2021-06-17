import styles from './LearnBanner.module.css';
import img from '../../assets/globe.svg';

const LearnBanner = () => {

  return(
    <div className={styles.bannerContainer}>
      <img className={styles.bannerIcon} src={img} alt="bannerIcon" />
    </div>
  )
}

export default LearnBanner;