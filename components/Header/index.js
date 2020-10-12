import Container from '../Container';
import Logo from '../Logo/index';
import Navigation from '../Navigation/index';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <Container className={styles.headerContainer}>
      <Logo />
      <div className={styles.nav}>
        <Navigation />
      </div>
    </Container>
  </header>
);

export default Header;