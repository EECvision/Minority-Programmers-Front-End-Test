import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <header className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={Logo} alt="logo" />
      </div>
      <nav className={styles.links}>
        <Link to='/home' className={styles.link}>Home</Link>
        <Link to='/startup' className={styles.link}>Incubator</Link>
        <Link to='/learn' className={styles.link}>Learn</Link>
      </nav>
      <div className={styles.bars}>
        <i className="fas fa-bars"></i>
      </div>
    </header>
  )
}

export default Navbar;