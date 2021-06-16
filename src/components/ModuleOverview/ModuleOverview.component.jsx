import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWeeks } from '../../redux/learn/learn.selectors';
import styles from './ModuleOverview.module.css';

const ModuleOverview = ({weeks}) => {
  return (
    <div className={styles.moduleOverviewContainer}>
      View all Weeks
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  weeks: selectWeeks
})

export default connect(mapStateToProps)(ModuleOverview);