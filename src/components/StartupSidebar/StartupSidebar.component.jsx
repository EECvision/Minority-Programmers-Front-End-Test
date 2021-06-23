import styles from './StartupSidebar.module.css';
// import { useState } from 'react';

const StartupSidebar = ({ details: { dateFounded, teamsize, teams, tags, location, website: { website, facebook, linkedin, twitter } } }) => {
  // const [nav, toggleNav] = useState(false);

  return (
    <aside className={styles.sidebarContainer}>
      {/* <div onClick={() => toggleNav(!nav)} className={styles.bars}>
        {
          nav ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>
        }
      </div> */}
      <div className={styles.foundDate}>Founded {dateFounded}</div>
      <div className={styles.wrapper}>
        <div className={styles.websiteContainer}>
          <div className={styles.title}>website</div>
          <div className={styles.websites}>
            <a href={website} target="_blank" rel="noreferrer">mangoswap.com</a>
            <a href={facebook} className={styles.link} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href={linkedin} className={styles.link} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href={twitter} className={styles.link} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className={styles.locationContainer}>
          <div className={styles.title}>Location</div>
          <div className={styles.value}>{location}</div>
        </div>
        <div className={styles.teamsizeContainer}>
          <div className={styles.title}>Team size</div>
          <div className={styles.value}>{teamsize} people</div>
        </div>

        <div className={styles.teamsContainer}>
          <div className={styles.title}>Meet the Team</div>
          <div className={styles.teams}>
            {
              teams.map(({ name, role, avatar }, idx) => (
                <div key={idx} className={styles.team}>
                  <div className={styles.avatar}>{avatar}</div>
                  <div className={styles.info}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.role}>{role}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className={styles.tagsContainer}>
          <div className={styles.title}>Tags</div>
          <div className={styles.tags}>
            {
              tags.map((tag, idx) => <div key={idx} className={styles.tag}>{tag}</div>)
            }
          </div>
        </div>
      </div>
    </aside>
  )
}

export default StartupSidebar;