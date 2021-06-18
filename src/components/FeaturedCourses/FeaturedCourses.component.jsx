import CoursePreview from '../CoursePreview/CoursePreview.component';
import styles from './FeaturedCourses.module.css';
import { useState, useRef } from 'react';

const FeaturedCourses = ({courses}) => {
  const [scrollPos, setScrollPos] = useState(window.innerWidth);
  const menuRef = useRef(null);

  return (
    <div className={styles.myCoursesContainer}>
      <div className={styles.caption}>
        <div className={styles.title}>Featured Courses</div>
        <div className={styles.line}/>
        <div className={styles.arrowContainer}>
        <div onClick={() => menuRef.current.scrollLeft = scrollPos - 700} className={styles.arrowLeft}><i className="fas fa-arrow-left"></i></div>
      <div onClick={() => menuRef.current.scrollLeft = scrollPos + 700} className={styles.arrowRight}><i className="fas fa-arrow-right"></i></div>
        </div>
      </div>
      <div onScroll={(e) => setScrollPos(menuRef.current.scrollLeft)} ref={menuRef} className={styles.courseMenu}>
        {
          courses.map(course => (
            <CoursePreview key={course.courseId} {...course}/>
          ))
        }
      </div>
    </div>
  )
}

export default FeaturedCourses;