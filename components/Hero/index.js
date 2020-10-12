import Container from '../Container';
import Headshot from '../Headshot'
import Rotate from 'react-rotating-text'
import Socials from '../Socials';

import styles from './hero.module.scss'


const lines = [
  "I'm a Frontend Developer",
  "I make UIs come to life",
  "Designers love working with me",
]

const Hero = () => (
  <div className={styles.wrapper}>
    <Container className={styles.heroWrapper}>
      <Headshot />
      <div className={styles.textWrapper}>
        <h1 className={styles.welcome}>Hi! I'm Damien</h1>
        <h2 className={styles.introText}>I'm a Frontend Developer with over 12 years experience working with companies of all sizes.</h2>
      </div>
      <Socials />
    </Container>
  </div>
)

export default Hero;