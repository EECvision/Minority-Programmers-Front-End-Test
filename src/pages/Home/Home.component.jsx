import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setActiveLink } from '../../redux/nav/nav.actions';
import img from '../../assets/globe.svg';
import team from '../../assets/team-work.svg';
import work from '../../assets/home-work.svg';
import ribborn from '../../assets/ribborn.svg';

const Home = ({ setActiveLink }) => {

  const handleClick = key => {
    setActiveLink({ [key]: true })
  }

  return (
    <div className={styles.homepageContainer}>
      <div className={styles.bannerContainer}>
        <img className={styles.icon} src={img} alt="icon" />
        <div className={styles.textContainer}>
          <p className={styles.mainText}>Minority Programmer <br /> Association</p>
          <button className={styles.button}>Read More <i className="fas fa-arrow-right"></i></button>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.cardContainer}>
          <img className={styles.ribborn} src={ribborn} alt="ribborn" />
          <img className={styles.cardImg} src={team} alt="team-work" />
          <Link to='/startup' onClick={() => handleClick('incubator')} className={styles.cardButton}>View Startup</Link>
          <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus curabitur id consectetur fringilla. Sed eget hendrerit convallis erat. Sit diam, tincidunt </div>
        </div>
        <div className={styles.cardContainer}>
          <img className={styles.ribborn} src={ribborn} alt="ribborn" />
          <img className={styles.cardImg} src={work} alt="work-from-home" />
          <Link to='/learn' onClick={() => handleClick('learn')} className={styles.cardButton}>Learn</Link>
          <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus curabitur id consectetur fringilla. Sed eget hendrerit convallis erat. Sit diam, tincidunt </div>
        </div>
      </div>
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setActiveLink: val => dispatch(setActiveLink(val))
})

export default connect(null, mapDispatchToProps)(Home);