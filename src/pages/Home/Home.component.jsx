import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setActiveLink } from '../../redux/nav/nav.actions';

const Home = ({ setActiveLink }) => {

  const handleClick = key => {
    setActiveLink({ [key]: true })
  }

  return (
    <div className={styles.homepageContainer}>
      <div className={styles.name}>Minority Programmers <b /> Association</div>
      <div className={styles.tiles}>
        <Link to="/startup" onClick={() => handleClick("incubator")} className={styles.tileA}>View Startups</Link>
        <Link to="/learn" onClick={() => handleClick("learn")} className={styles.tileB}>Learn</Link>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setActiveLink: val => dispatch(setActiveLink(val))
})

export default connect(null, mapDispatchToProps)(Home);