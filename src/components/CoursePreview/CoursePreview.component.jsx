import styles from './CoursePreview.module.css';
import { Link, useRouteMatch } from 'react-router-dom';

const CoursePreview = ({ courseTitle, subtitle, url }) => {
  const match = useRouteMatch();

  return (
    <Link to={`${match.path}/${url}`} className={styles.coursePreviewContainer}>
      <div className={styles.incentiveContainer}>
        <div className={styles.incentive}>Earn&#x24;30</div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>{courseTitle}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      <div className={styles.learnButtonContainer}>
        <div className={styles.learnButton}>Learn</div>
      </div>
      <div className={styles.courseInfo}>
        <div className={styles.info}>8.3/10 Modules</div>
        <meter className={styles.range} value="5" min="0" max="10"></meter>
        <div className={styles.completed}>83% completed</div>
      </div>
    </Link>
  )
}

export default CoursePreview;