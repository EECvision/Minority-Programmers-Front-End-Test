import styles from './Lesson.module.css';

const Lesson = ({ activityId, activityTitle, lesson: { duration, header } }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.lessonContainer}>
        <div className={styles.progressContainer}>
          <div className={styles.progress}>in progress</div>
        </div>
        <div className={styles.title}>Activity {activityId} - {activityTitle}</div>
        <div className={styles.duration}> <i className="far fa-clock"></i> {duration} minutes</div>
        <div className={styles.textContainer}>
          <h1 className={styles.header}>Header</h1>
          <p className={styles.para}>{header}</p>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.header}>Header</h1>
          <p className={styles.para}>{header}</p>
        </div>
      </div>
    </div>
  )
}

export default Lesson;