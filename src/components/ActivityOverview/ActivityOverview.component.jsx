import React from 'react';
import ActivityPreview from '../ActivityPreview/ActivityPreview.component';
import styles from './ActivityOverview.module.css';

const ActivityOverview = ({activity}) => {
  const activityToArray = Object.keys(activity).map(key => activity[key]);
  return (
    <div className={styles.activityOverviewContainer}>
      {
        activityToArray.map(activity => (
          <ActivityPreview key={activity.activityId} {...activity}/>
        ))
      }
    </div>
  )
}

export default ActivityOverview;