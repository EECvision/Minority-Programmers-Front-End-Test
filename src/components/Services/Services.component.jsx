import styles from './Services.module.css';
import img_1 from '../../assets/preview-image(1).png';
import img_2 from '../../assets/preview-image(2).png';
import img_3 from '../../assets/preview-image(3).png';

const Button = ({children}) => <div className={styles.button}>{children}</div>;

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.img_1}>
        <img src={img_1} alt="advice" />
        <Button>Advice a startup</Button>
      </div>
      <div className={styles.img_2}>
        <img src={img_2} alt="join" />
        <Button>Join Minoriy Venture Cohort</Button>
      </div>
      <div className={styles.img_3}>
        <img src={img_3} alt="help" />
        <Button>Help {"<Code/>"} </Button>
      </div>
    </div>
  )
}

export default Services;