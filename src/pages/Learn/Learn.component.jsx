import React from 'react';
import CourseOverview from '../../components/CourseOverview.component/CourseOverview.component';
import styles from './Learn.module.css';

const Learn = ({match}) => {
  return(
    <div className={styles.learnContainer}>
      <CourseOverview/>
    </div>
  )
}

export default Learn;