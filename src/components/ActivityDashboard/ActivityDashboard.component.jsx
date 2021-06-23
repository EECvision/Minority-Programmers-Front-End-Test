import styles from './ActivityDashboard.module.css';
import courseImagePreview from '../../assets/preview-course(1).png';

const ActivityDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
    <video className={styles.video} poster={courseImagePreview} controls src=""></video> 
    </div>
  )
}

export default ActivityDashboard;