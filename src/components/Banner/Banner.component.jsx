import styles from './Banner.module.css';
import banner from '../../assets/banner-img.png';

const bannerStyle = banner => ({
  backgroundImage: `url(${banner})`
})

const Banner = () => {
  return (
    <div style={bannerStyle(banner)} className={styles.bannerContainer}>
      <div className={styles.textContainer}>
        <div className={styles.text}>Invest directly into minority innovations.</div>
        <div className={styles.button}>view startups</div>
      </div>
    </div>
  )
}

export default Banner;