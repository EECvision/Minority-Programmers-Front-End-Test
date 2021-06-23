import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CourseModuleSidebar from '../../components/CourseModuleSidebar/CourseModuleSidebar.component';
import ModuleOverview from '../../components/ModuleOverview/ModuleOverview.component';
import UserDashboard from '../../components/UserDashboard/UserDashboard.component';
import useScreenWidth from '../../components/withScreenWidth-HOC.component';
import { selectCourse } from '../../redux/learn/learn.selectors';
import styles from './Course.module.css';

const Course = ({ course }) => {
  const [action, setAction] = useState({ module: true });
  const [show, set] = useState(true);
  const {width} = useScreenWidth();
  useEffect(()=> {
    if(width <= 996) return set(false)
    set(true);
  },[width]);

  return (
    <div className={styles.courseContainer}>
      <div style={show ? {right: '2em'} : {left: '1em'}} onClick={()=> set(!show)} className={styles.showNav}><i class="fas fa-exchange-alt"></i></div>
      <CourseModuleSidebar {...course} show={show} />
      <div className={styles.wrapper}>
        <UserDashboard />
        <div className={styles.actionContainer}>
          <div className={styles.actionBar}>
            <div style={{borderBottom: action.module ? '4px solid yellow' : 'none'}} onClick={()=>setAction({module: true})} className={styles.action}>Module</div>
            <div style={{borderBottom: action.calendar ? '4px solid yellow' : 'none'}} onClick={()=>setAction({calendar: true})} className={styles.action}>Calendar</div>
            <div style={{borderBottom: action.message ? '4px solid yellow' : 'none'}} onClick={()=>setAction({message: true})} className={styles.action}>Messages</div>
          </div>
          {
            action.module ? <ModuleOverview {...course} /> 
              : action.calendar ? <div className={styles.calendarContainer}>Calendar</div>
                : action.message ? <div className={styles.messageContainer}>Messages </div> : null
          }
          
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  course: selectCourse(ownProps.match.params.courseId)(state)
})

export default connect(mapStateToProps)(Course);