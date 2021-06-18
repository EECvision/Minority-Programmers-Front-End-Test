import { useState, useRef } from 'react';
import RelatedStartupPreview from '../RelatedStartupPreview/RelatedStartupPreview.component';
import styles from './RelatedStartup.module.css';

const RelatedStartup = ({ startups }) => {
  const startupsForView = Object.keys(startups).map(key => startups[key]);
  const [scrollPos, setScrollPos] = useState(window.innerWidth);
  const menuRef = useRef(null);

  return (
    <div className={styles.startupContainer}>
      <div className={styles.caption}>
        <div className={styles.boldCaption}>Related Startups</div>
        <div className={styles.arrowContainer}>
          <div onClick={() => menuRef.current.scrollLeft = scrollPos - 700} className={styles.arrowLeft}><i style={{ padding: "0.5em" }} className="fas fa-arrow-left"></i></div>
          <div onClick={() => menuRef.current.scrollLeft = scrollPos + 700} className={styles.arrowRight}><i style={{ padding: "0.5em" }} className="fas fa-arrow-right"></i></div>
        </div>
      </div>
      <div onScroll={(e) => setScrollPos(menuRef.current.scrollLeft)} ref={menuRef} className={styles.startupMenu}>
        {
          startupsForView
            .filter(({ trend }) => trend === "featured")
            .map(startup => (
              <RelatedStartupPreview key={startup.id} startup={startup} />
            ))
        }
      </div>
    </div>
  )
}

export default RelatedStartup;