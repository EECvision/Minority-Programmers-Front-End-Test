import StartupPreview from '../StartupPreview/StartupPreview.component';
import styles from './FeaturedStartup.module.css';

const FeaturedStartup = ({startups}) => {
  return (
    <div className={styles.startupContainer}>
      <div className={styles.caption}>
        <div className={styles.boldCaption}>Featured <br /> Startups</div>
        <div className={styles.lightCaption}>Invest in the next <br /> billion dollar <br /> company today</div>
      </div>
      <div className={styles.startupMenu}>
          {
            startups
            .filter( ({trend}) => trend === "featured")
            .map(startup => (
              <StartupPreview key={startup.id} startup={startup} />
            ))
          }
      </div>
      <div className={styles.arrowLeft}><i style={{padding: "1em"}} className="fas fa-arrow-left"></i></div>
      <div className={styles.arrowRight}><i style={{padding: "1em"}} className="fas fa-arrow-right"></i></div>

    </div>
  )
}

export default FeaturedStartup;