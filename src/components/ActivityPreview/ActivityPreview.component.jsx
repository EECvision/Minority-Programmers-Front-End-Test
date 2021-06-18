import styles from './ActivityPreview.module.css';
// import preview1 from '../../assets/preview-course(1).png';
import preview2 from '../../assets/preview-course(2).png';
import { Link, useRouteMatch } from 'react-router-dom';

const ActivityPreview = ({activityId, activityTitle, url}) => {
  const match = useRouteMatch();
  return (
    <Link to={`${match.url}/${url}`} className={styles.previewContainer}>
      <div className={styles.wrapper}>
        <img className={styles.courseImagePreview} src={preview2} alt="course-screen-preview" />
        <div className={styles.courseTitle}>Activity {activityId} - {activityTitle}</div>
      </div>
      <div className={styles.status}>completed</div>
    </Link>
  )
}

export default ActivityPreview;