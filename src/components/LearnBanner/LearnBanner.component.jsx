import styles from './LearnBanner.module.css';
import img from '../../assets/globe.svg';

const LearnBanner = () => {

  return(
    <div className={styles.bannerContainer}>
      <img className={styles.icon} src={img} alt="icon" />
      <div className={styles.textContainer}>
        <div className={styles.mainText}>Learn high in demand <br /> IT Skills &#x26; Get Crypto</div>
        <div className={styles.subText}>powered by KoinStreet</div>
      </div>
    </div>
  )
}

export default LearnBanner;