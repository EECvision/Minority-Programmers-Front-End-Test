import { useState } from 'react';
import LearnBanner from '../../components/LearnBanner/LearnBanner.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCoursesForView } from '../../redux/learn/learn.selectors';
import MyCourses from '../../components/MyCourses/MyCourses.component';

import styles from './Learn.module.css';
import FeaturedCourses from '../../components/FeaturedCourses/FeaturedCourses.component';

const Learn = ({ courses }) => {
  const [loadMore, setLoadMore] = useState(true);
  return (
    <div className={styles.learnContainer}>
      <LearnBanner />
      <div className={styles.courseOverview}>
        <MyCourses courses={courses} />
        <FeaturedCourses courses={courses} />
      </div>
      <div className={styles.loadButtonContainer}>
       <div onClick={() => setLoadMore(!loadMore)} className={styles.loadButton}>Load {loadMore ? "more" : "less"}</div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  courses: selectCoursesForView
})

export default connect(mapStateToProps)(Learn);