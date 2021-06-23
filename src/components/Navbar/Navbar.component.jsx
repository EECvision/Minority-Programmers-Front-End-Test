import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../assets/logo.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectActiveLink, selectToggleNavbar } from '../../redux/nav/nav.selector';
import { setActiveLink, toggleNavbar } from '../../redux/nav/nav.actions';

const Navbar = ({navbar, toggleNavbar, activeLink, setActiveLink}) => {

  const handleClick= key =>{
    // toggleNavbar();
    setActiveLink({[key]: true})
  }

  return (
    <header className={styles.navbarContainer}>
      <Link to="/home" className={styles.logoContainer}>
        <img className={styles.logo} src={Logo} alt="logo" />
      </Link>
      <nav className={styles.links}>
        <Link to='/home' onClick={()=>handleClick("home")} style={{borderBottom: activeLink.home ? '2px solid #FF00B8' : 'transparent'}} className={styles.link}>Home</Link>
        <Link to='/startup' onClick={()=>handleClick("incubator")} style={{borderBottom: activeLink.incubator ? '2px solid #FF00B8' : 'transparent'}} className={styles.link}>Incubator</Link>
        <Link to='/learn' onClick={()=>handleClick("learn")} style={{borderBottom: activeLink.learn ? '2px solid #FF00B8' : 'transparent'}} className={styles.link}>Learn</Link>
      </nav>
      <div onClick={()=>toggleNavbar(!navbar)} className={styles.bars}>
        {
          navbar ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>
        }
      </div>
      <nav style={{height: navbar ? 'calc(100vh - calc(2em + 3vmax))' : '0'}} className={styles.linksMobile}>
        <Link to='/home' onClick={()=>handleClick("home")} style={{borderBottom: activeLink.home ? '2px solid #FF00B8' : 'transparent'}} className={styles.linkMobile}>Home</Link>
        <Link to='/startup' onClick={()=>handleClick("incubator")} style={{borderBottom: activeLink.incubator ? '2px solid #FF00B8' : 'transparent'}} className={styles.linkMobile}>Incubator</Link>
        <Link to='/learn' onClick={()=>handleClick("learn")} style={{borderBottom: activeLink.learn ? '2px solid #FF00B8' : 'transparent'}} className={styles.linkMobile}>Learn</Link>
      </nav>
    </header>
  )
}
// margin-top: calc(1em + 3vmax);

const mapStateToProps = createStructuredSelector({
  navbar: selectToggleNavbar,
  activeLink: selectActiveLink
})

const mapDispatchToProps = dispatch => ({
  toggleNavbar: ()=> dispatch(toggleNavbar()),
  setActiveLink: key => dispatch(setActiveLink(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);