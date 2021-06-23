import styles from './CourseModuleSidebar.module.css';
import { Link, useRouteMatch } from 'react-router-dom';

const CourseModuleSidebar = ({ courseTitle, module, show }) => {
  const moduleToArray = Object.keys(module).map(key => module[key]);
  const match = useRouteMatch();
  return (
    <div style={{display: show ? "block" : "none"}} className={styles.moduleSidebarContainer}>
      <Link to="/learn"><div className={styles.previous}> <i className="fas fa-angle-left"></i> Course</div></Link>
      <div className={styles.courseTitle}>{courseTitle}</div>
      {
        moduleToArray.map(week => (
          <div className={styles.weekContainer} key={week.weekId}>
            <Link to={`/learn/${match.params.courseId}/${week.url}`} >
              <div className={styles.weekTitle}>week {week.weekId}</div>
            </Link>
            <div className={styles.topicContainer}>
              <div className={styles.status}></div>
              <div className={styles.topic}>Introducton</div>
            </div>
            <div className={styles.topicContainer}>
              <div className={styles.status}></div>
              <div className={styles.topic}>Introducton</div>
            </div>
            <div className={styles.topicContainer}>
              <div className={styles.status}></div>
              <div className={styles.topic}>Introducton</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CourseModuleSidebar;