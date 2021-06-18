import styles from './WeekPreview.module.css';
import { Link, useRouteMatch } from 'react-router-dom';

const WeekPreview = ({weekId, weekTitle, url}) => {
  const match = useRouteMatch();
  return (
    <Link to={`${match.url}/${url}`} className={styles.weekPreviewContainer}>
      <div className={styles.statusContainer}>
        <div className={styles.status}>completed</div>
      </div>
      <div className={styles.title}>Week {weekId} - {weekTitle}</div>
      <meter className={styles.meter} value="10" min="0" max="10"></meter>
      <div className={styles.progress}>100% completed</div>
    </Link>
  )
}

export default WeekPreview;