import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Banner from '../../components/Banner/Banner.component';
import FeaturedStartup from '../../components/FeaturedStartup/FeaturedStartup.component';
import Services from '../../components/Services/Services.component';
import UpcomingStartup from '../../components/UpcomingStartup/UpcomingFeature';
import { selectStartupsForDisplay } from '../../redux/startup/startup.selectors';
import styles from './Incubator.module.css';

const Incubator = ({startups}) => {
  return (
    <div className={styles.incubatorContainer}>
      <Banner/>
      <section className={styles.incubatorOverview}>
        <FeaturedStartup startups={startups}/>
        <Services/>
        <UpcomingStartup startups={startups}/>
      </section>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  startups: selectStartupsForDisplay
})
export default connect(mapStateToProps)(Incubator);