import React from 'react';
import ModuleOverview from '../../components/ModuleOverview/ModuleOverview.component';
import styles from './Course.module.css';

const Course = () => {
  return (
    <div className={styles.courseContainer}>
      <ModuleOverview/>
    </div>
  )
}

export default Course;