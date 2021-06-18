import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.name}>Minority Programmers <b/> Association</div>
      <div className={styles.tiles}>
        <Link to="/startup" className={styles.tileA}>View Startups</Link>
        <Link to="/learn" className={styles.tileB}>Learn</Link>
      </div>
    </div>
  )
}

export default Home;