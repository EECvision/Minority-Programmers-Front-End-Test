import styles from './StartupMain.module.css';

const StartupMain = ({details: {about, vision}}) => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.aboutContainer}>
        <div className={styles.title}>About</div>
        <div className={styles.text}>{about}</div>
      </section>
      <section className={styles.visionContainer}>
        <div className={styles.title}>Vision</div>
        <div className={styles.text}>{vision}</div>
      </section>
    </main>
  )
}

export default StartupMain;