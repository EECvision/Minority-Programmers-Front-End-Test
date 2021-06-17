import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.name}>Minority Programmers <b/> Association</div>
      <div className={styles.tiles}>
        <div className={styles.tileA}>Startup</div>
        <div className={styles.tileB}>Learn</div>
      </div>
    </div>
  )
}

export default Home;