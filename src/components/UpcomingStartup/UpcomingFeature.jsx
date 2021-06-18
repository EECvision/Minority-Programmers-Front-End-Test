import StartupPreview from '../StartupPreview/StartupPreview.component';
import { useState } from 'react';
import styles from './UpcomingStartup.module.css';

const UpcomingStartup = ({ startups }) => {
  const [loadMore, setLoadMore] = useState(true);
  return (
    <div className={styles.startupWrapper}>
      <div className={styles.startupContainer}>
        <div className={styles.caption}>
          <div className={styles.boldCaption}>Upcoming <br /> Startups</div>
          <div className={styles.lightCaption}>These visionary companies and <br /> disruptors are on their journey <br /> to change the world</div>
        </div>
        {
          startups
            .filter(({ trend }) => trend === "upcoming")
            .filter((_, idx) => loadMore ? idx <= 6 : true)
            .map(startup => (
              <StartupPreview key={startup.id} startup={startup} />
            ))
        }
      </div>
      <div onClick={()=>setLoadMore(!loadMore)} className={styles.loadButton}>Load {loadMore ? "more" : "less"}</div>
    </div>
  )
}

export default UpcomingStartup;