import { connect } from 'react-redux';
import CourseModuleSidebar from '../../components/CourseModuleSidebar/CourseModuleSidebar.component';
import WeekDashbaord from '../../components/WeekDashboard/WeekDashboard.component';
import ActivityOverview from '../../components/ActivityOverview/ActivityOverview.component';
import { selectCourse } from '../../redux/learn/learn.selectors';
import { selectWeek } from '../../redux/learn/learn.selectors';
import styles from './Week.module.css';
import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useScreenWidth from '../../components/withScreenWidth-HOC.component';

const Week = ({ week, course }) => {

  const match = useRouteMatch();
  const url = Object.keys(course.module).map(key => course.module[key].url);
  const [next, setNext] = useState(parseInt(week.weekId) - 1);
  const [show, set] = useState(true);
  const { width } = useScreenWidth();
  useEffect(() => {
    if (width <= 996) return set(false)
    set(true);
  }, [width]);


  useEffect(() => {
    setNext(parseInt(week.weekId) - 1)
  }, [week.weekId])

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
    <div className={styles.weekContainer}>
      <div onClick={()=> set(!show)} className={styles.showNav}><i class="fas fa-exchange-alt"></i></div>
      <CourseModuleSidebar {...course} show={show}/>
      <div className={styles.wrapper}>
        <WeekDashbaord {...week} />
        <div className={styles.arrowContainer}>
          <Link to={`/learn/${match.params.courseId}/${url[next ? next - 1 : url.length - 1]}`} onClick={handlePrevious} className={styles.arrowLeft}><i style={{ padding: "0.5em" }} className="fas fa-arrow-left"></i></Link>
          <Link to={`/learn/${match.params.courseId}/${url[next === url.length - 1 ? 0 : next + 1]}`} onClick={handleNext} className={styles.arrowRight}><i style={{ padding: "0.5em" }} className="fas fa-arrow-right"></i></Link>
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

