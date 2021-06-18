import React from 'react';
import WeekPreview from '../WeekPreview/WeekPreview.component';
import styles from './ModuleOverview.module.css';

const ModuleOverview = ({module}) => {
  const moduleToArray = Object.keys(module).map(key => module[key]);

  return (
    <div className={styles.moduleOverviewContainer}>
      {
        moduleToArray.map(week => (
          <WeekPreview key={week.weekId} {...week}/>
        ))
      }
    </div>
  )
}

export default ModuleOverview;