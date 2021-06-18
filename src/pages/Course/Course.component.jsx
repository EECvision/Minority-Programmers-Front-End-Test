import { useState } from 'react';
import { connect } from 'react-redux';
import CourseModuleSidebar from '../../components/CourseModuleSidebar/CourseModuleSidebar.component';
import ModuleOverview from '../../components/ModuleOverview/ModuleOverview.component';
import UserDashboard from '../../components/UserDashboard/UserDashboard.component';
import { selectCourse } from '../../redux/learn/learn.selectors';
import styles from './Course.module.css';

const Course = ({ course }) => {
  const [action, setAction] = useState({ module: true });

  return (
    <div className={styles.courseContainer}>
      <CourseModuleSidebar {...course} />
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