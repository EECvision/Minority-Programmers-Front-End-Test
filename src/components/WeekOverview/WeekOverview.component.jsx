import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectActivities } from '../../redux/learn/learn.selectors';
import styles from './WeekOverview.module.css';

const WeekOverview = ({activities}) => {
  return (
    <div className={styles.weekContainer}>
      View all activities
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  activities: selectActivities
})

export default connect(mapStateToProps)(WeekOverview);