import styles from './StartupHeader.module.css';

const StartupHeader = ({ details: { icon, name, fundRaised, totalFund, history } }) => {
  const getPercentageFund = () => ((parseInt(fundRaised) / parseInt(totalFund)) * 100);
  return (
    <header className={styles.header}>
      <div className={styles.iconContainer}>
        <div onClick={()=> history.goBack()} className={styles.arrowLeft}><i style={{ padding: '0.8em' }} className="fas fa-arrow-left"></i></div>
        <img className={styles.icon} src={icon} alt="startup-icon" />
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.fundWrapper}>
        <div className={styles.fundContainer}>
          <div className={styles.fundTextContainer}>
            <div className={styles.fundText}>Funds raise</div>
            <div className={styles.percentage}>{getPercentageFund()}&#x25; complete</div>
          </div>
          <div className={styles.fund}>&#x24;{fundRaised}  /  &#x24;{totalFund}</div>
        </div>
        <div className={styles.meter}>
          <meter style={{ width: '100%' }} value={`${parseInt(fundRaised)}`} min="0" max={`${parseInt(totalFund)}`} />
        </div>
      </div>
      <div className={styles.fundButton}>Fund Startup</div>
    </header>
  )
}

export default StartupHeader;