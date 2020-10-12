import Container from '../Container';
import Headshot from '../Headshot'
import Rotate from 'react-rotating-text'

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
        <Rotate items={lines} className={styles.introText} />
      </div>
    </Container>
  </div>
)

export default Hero;