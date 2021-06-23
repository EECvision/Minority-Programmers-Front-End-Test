import styles from './UserDashboard.module.css';

const UserDashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dashboardContainer}>
        <div className={styles.imageContainer}>
          {/* <img src="" alt="" /> */}
          <div className={styles.image}>image</div>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.infoContainer}>
            <div className={styles.name}>Welcome back, <br /> Shot</div>
            <div className={styles.progress}>75% Completed</div>
            <div className={styles.resumeButtonContainer}>
              <div className={styles.resumeButton}>Resume</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard;