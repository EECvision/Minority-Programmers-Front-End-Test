import { connect } from 'react-redux';
import ActivityDashboard from '../../components/ActivityDashboard/ActivityDashboard.component';
import CourseModuleSidebar from '../../components/CourseModuleSidebar/CourseModuleSidebar.component';
import Lesson from '../../components/Lesson/Lesson.component';
import { selectActivity, selectCourse, selectWeek } from '../../redux/learn/learn.selectors';
import styles from './Activity.module.css';
import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useScreenWidth from '../../components/withScreenWidth-HOC.component';

const Activity = ({ activity, course, week }) => {
  const match = useRouteMatch();
  const url = Object.keys(week.activity).map(key => week.activity[key].url);
  const [next, setNext] = useState(parseInt(activity.activityId) - 1);
  const [show, set] = useState(true);
  const { width } = useScreenWidth();
  useEffect(() => {
    if (width <= 996) return set(false)
    set(true);
  }, [width]);

  useEffect(() => {
    setNext(parseInt(activity.activityId) - 1)
  }, [activity.activityId])

  const handleNext = () => {
    if (next >= url.length - 1) {
      setNext(0)
    } else {
      setNext(n => n + 1)
    }
  }

  const handlePrevious = () => {
    if (next <= 0) {
      setNext(url.length - 1)
    } else {
      setNext(n => n - 1)
    }
  }

  return (
    <div className={styles.ActivityContainer}>
      <div onClick={()=> set(!show)} className={styles.showNav}><i class="fas fa-exchange-alt"></i></div>
      <CourseModuleSidebar {...course} show={show}/>
      <div className={styles.wrapper}>
        <ActivityDashboard {...activity} />
        <div className={styles.arrowContainer}>
          <Link to={`/learn/${match.params.courseId}/${match.params.weekId}/${url[next ? next - 1 : url.length - 1]}`} onClick={handlePrevious} className={styles.arrowLeft}><i style={{ padding: "0.5em" }} className="fas fa-arrow-left"></i></Link>
          <Link to={`/learn/${match.params.courseId}/${match.params.weekId}/${url[next === url.length - 1 ? 0 : next + 1]}`} onClick={handleNext} className={styles.arrowRight}><i style={{ padding: "0.5em" }} className="fas fa-arrow-right"></i></Link>
        </div>
        <Lesson {...activity} />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  activity: selectActivity(ownProps.match.params)(state),
  week: selectWeek(ownProps.match.params)(state),
  course: selectCourse(ownProps.match.params.courseId)(state)
})

export default connect(mapStateToProps)(Activity);


