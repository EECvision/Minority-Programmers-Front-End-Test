import styles from './RelatedStartupPreview.module.css';
import icon from '../../assets/startup-icon.svg';
import { Link, useRouteMatch } from 'react-router-dom';

const RelatedStartupPreview = ({startup}) => {
  const match = useRouteMatch();
  const {name, fundRaised, totalFund, url} = startup;
  const getPercentageFund=()=> ((parseInt(fundRaised)/parseInt(totalFund))*100);
  return (
    <Link to={`${match.path}/${url}`} className={styles.startupPreviewContainer}>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src={icon} alt="startup-icon"/>
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.fundText}>
        <div>Fund raise</div>
        <div>{getPercentageFund()}&#x25;</div>
      </div>
      <div className={styles.fund}>&#x24;{fundRaised}/&#x24;{totalFund}</div>
      <div className={styles.meter}>
        <meter style={{width: '100%'}} value={`${parseInt(fundRaised)}`} min="0" max={`${parseInt(totalFund)}`}/>
      </div>
    </Link>
  )
}

export default RelatedStartupPreview;