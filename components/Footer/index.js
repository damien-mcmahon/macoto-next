import Container from '../Container';
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.wrapper}>
    <Container>
      <div className={styles.copyright}>&copy; 2020 - Macoto Ltd</div>
    </Container>
  </footer>
)

export default Footer