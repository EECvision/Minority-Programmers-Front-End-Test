import React from 'react';
import CourseOverview from '../../components/CourseOverview.component/CourseOverview.component';
import LearnBanner from '../../components/LearnBanner/LearnBanner.component';
import styles from './Learn.module.css';

const Learn = ({match}) => {
  return(
    <div className={styles.learnContainer}>
      <LearnBanner/>
      <CourseOverview/>
    </div>
  )
}

export default Learn;