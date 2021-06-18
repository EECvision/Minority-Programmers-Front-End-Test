import { connect } from 'react-redux';
import CourseModuleSidebar from '../../components/CourseModuleSidebar/CourseModuleSidebar.component';
import WeekDashbaord from '../../components/WeekDashboard/WeekDashboard.component';
import ActivityOverview from '../../components/ActivityOverview/ActivityOverview.component';
import { selectCourse } from '../../redux/learn/learn.selectors';
import { selectWeek } from '../../redux/learn/learn.selectors';
import styles from './Week.module.css';

const Week = ({ week, course }) => {
  return (
    <div className={styles.weekContainer}>
      <CourseModuleSidebar {...course} />
      <div className={styles.wrapper}>
        <WeekDashbaord {...week} />
        <div className={styles.arrowContainer}>
          <div className={styles.arrowLeft}><i style={{ padding: "0.5em" }} className="fas fa-arrow-left"></i></div>
          <div className={styles.arrowRight}><i style={{ padding: "0.5em" }} className="fas fa-arrow-right"></i></div>
        </div>
        <ActivityOverview {...week} />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  week: selectWeek(ownProps.match.params)(state),
  course: selectCourse(ownProps.match.params.courseId)(state)
})

export default connect(mapStateToProps)(Week);

