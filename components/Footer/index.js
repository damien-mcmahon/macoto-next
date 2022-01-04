import Container from '../Container';
import styles from './footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.copyright}>&copy; {currentYear} - Macoto Ltd</div>
      </Container>
    </footer>
  );
}

export default Footer;
