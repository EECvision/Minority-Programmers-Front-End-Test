import styles from './Services.module.css';
import img_1 from '../../assets/preview-image(1).png';
import img_2 from '../../assets/preview-image(2).png';
import img_3 from '../../assets/preview-image(3).png';

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <img className={styles.img_1} src={img_1} alt="advice" />
      <img className={styles.img_2} src={img_2} alt="join" />
      <img className={styles.img_3} src={img_3} alt="help" />
    </div>
  )
}

export default Services;