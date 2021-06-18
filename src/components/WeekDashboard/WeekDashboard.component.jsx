import styles from './WeekDashboard.module.css';

const WeekDashboard = ({ weekId, }) => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.title}>Week {weekId}</div>
      <div className={styles.progressText}>Progress</div>
      <div className={styles.statusContainer}>
        <div className={styles.status}>10/10</div>
        <meter className={styles.meter} value="10" min="0" max="10" />
        <div className={styles.progress}>100% complete</div>
      </div>
    </div>
  )
}

export default WeekDashboard;