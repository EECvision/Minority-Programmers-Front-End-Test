import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStartups } from '../../redux/startup/startup.selectors';
import styles from './StartupOverview.module.css';

const StartupOverview = ({startups}) => {
  return (
    <div className={styles.collectionContainer}>
      view all startups
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  startups: selectStartups
})
export default connect(mapStateToProps)(StartupOverview);