import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../assets/logo.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectActiveLink, selectToggleNavbar } from '../../redux/nav/nav.selector';
import { setActiveLink, toggleNavbar } from '../../redux/nav/nav.actions';

const Navbar = ({navbar, toggleNavbar, activeLink, setActiveLink}) => {

  const handleClick= key =>{
    toggleNavbar();
    setActiveLink({[key]: true})
  }

  return (
    <header className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={Logo} alt="logo" />
      </div>
      <nav className={styles.links}>
        <Link to='/home' onClick={()=>handleClick("home")} style={{borderBottom: activeLink.home ? '4px solid #FF00B8' : 'none'}} className={styles.link}>Home</Link>
        <Link to='/startup' onClick={()=>handleClick("incubator")} style={{borderBottom: activeLink.incubator ? '4px solid #FF00B8' : 'none'}} className={styles.link}>Incubator</Link>
        <Link to='/learn' onClick={()=>handleClick("learn")} style={{borderBottom: activeLink.learn ? '4px solid #FF00B8' : 'none'}} className={styles.link}>Learn</Link>
      </nav>
      <div onClick={()=>toggleNavbar(!navbar)} className={styles.bars}>
        {
          navbar ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>
        }
      </div>
      <nav style={{height: navbar ? 'calc(100vh - 6em)' : '0'}} className={styles.linksMobile}>
        <Link to='/home' onClick={()=>handleClick("home")} style={{borderBottom: activeLink.home ? '4px solid #FF00B8' : 'none'}} className={styles.linkMobile}>Home</Link>
        <Link to='/startup' onClick={()=>handleClick("incubator")} style={{borderBottom: activeLink.incubator ? '4px solid #FF00B8' : 'none'}} className={styles.linkMobile}>Incubator</Link>
        <Link to='/learn' onClick={()=>handleClick("learn")} style={{borderBottom: activeLink.learn ? '4px solid #FF00B8' : 'none'}} className={styles.linkMobile}>Learn</Link>
      </nav>
    </header>
  )
}

const mapStateToProps = createStructuredSelector({
  navbar: selectToggleNavbar,
  activeLink: selectActiveLink
})

const mapDispatchToProps = dispatch => ({
  toggleNavbar: ()=> dispatch(toggleNavbar()),
  setActiveLink: key => dispatch(setActiveLink(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);