import React from 'react';
import { connect } from 'react-redux';
import { selectStartupDetails } from '../../redux/startup/startup.selectors';
import icon from '../../assets/startup-icon.svg';
import styles from './Startup.module.css';
import RelatedStartup from '../../components/RelatedStartup/RelatedStartup.component';
import StartupHeader from '../../components/StartupHeader/StartupHeader.component';
import StartupSidebar from '../../components/StartupSidebar/StartupSidebar.component';
import StartupMain from '../../components/StartupMain/StartupMain.component';

const Startup = ({ startupDetail, startups }) => {
  const {
    name, fundRaised, totalFund, dateFounded, location, 
    teams, website, teamsize, tags, about, vision,
  } = startupDetail;

  return (
    <div className={styles.startupContainer}>
      <StartupHeader details={{icon, name, fundRaised, totalFund}}/>
      
      <div className={styles.wrapper}>
        <StartupSidebar details={{dateFounded, website, location, teams, teamsize, tags}}/>
        
        <div className={styles.RHS}>
          <StartupMain details={{about, vision}}/>
          <RelatedStartup startups={startups}/>
        </div>

      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  startupDetail: selectStartupDetails(ownProps.match.params.startupId)(state),
  startups: state.startup.startups
});

export default connect(mapStateToProps)(Startup);