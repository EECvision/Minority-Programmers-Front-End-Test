import React from 'react';
import styles from './CourseOverview.module.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCourses } from '../../redux/learn/learn.selectors';

const CourseOverview = ({courses}) => {
  return (
    <div className={styles.courseOverviewContainer}>
      view all courses
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  courses: selectCourses
})

export default connect(mapStateToProps)(CourseOverview);