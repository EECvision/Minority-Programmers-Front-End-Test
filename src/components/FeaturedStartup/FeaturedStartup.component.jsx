import { useState, useRef } from 'react';
import StartupPreview from '../StartupPreview/StartupPreview.component';
import styles from './FeaturedStartup.module.css';

const FeaturedStartup = ({startups}) => {
  const [scrollPos, setScrollPos] = useState(window.innerWidth);
  const menuRef = useRef(null);

  return (
    <div className={styles.startupContainer}>
      <div className={styles.caption}>
        <div className={styles.boldCaption}>Featured <br /> Startups</div>
        <div className={styles.lightCaption}>Invest in the next <br /> billion dollar <br /> company today</div>
      </div>
      <div onScroll={(e) => setScrollPos(menuRef.current.scrollLeft)} ref={menuRef} className={styles.startupMenu}>
          {
            startups
            .filter( ({trend}) => trend === "featured")
            .map(startup => (
              <StartupPreview margin key={startup.id} startup={startup} />
            ))
          }
      </div>
      <div onClick={() => menuRef.current.scrollLeft = scrollPos - 700} className={styles.arrowLeft}><i className="fas fa-arrow-left"></i></div>
      <div onClick={() => menuRef.current.scrollLeft = scrollPos + 700} className={styles.arrowRight}><i className="fas fa-arrow-right"></i></div>

    </div>
  )
}

export default FeaturedStartup;