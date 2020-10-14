import { useInView } from 'react-intersection-observer'
import cx from 'classnames'

import Container from "../Container";
import TickSVG from '../../svgs/tick.svg'

import styles from './workwithme.module.scss'
import Logo from '../Logo';

const WorkWithMe = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={cx("sectionWrapper", styles.wrapper)} >
      <Container>
        <h1 className={cx("sectionTitle", styles.title)}>Work With Me</h1>
        <div className={styles.servicesWrapper}>
          <div className={styles.servicesCardWrapper}>
            <div className={styles.logoWrapper}>
              <Logo className={styles.servicesCardLogo} />
            </div>

            <dl className={styles.servicesList}>
              <dt className={styles.service}><TickSVG className={styles.tick} />Prototypes</dt>
              <dd className={styles.serviceInfo}>Let's build out an MVP of your idea</dd>
              <dt className={styles.service}><TickSVG className={styles.tick} />Consulting</dt>
              <dd className={styles.serviceInfo}>I can help your Frontend Team to scale up</dd>
              <dt className={styles.service}><TickSVG className={styles.tick} />Development</dt>
              <dd className={styles.serviceInfo}>I can help build your product</dd>
            </dl>
          </div>

          <div className={styles.contactWrapper}>
            <a className={styles.contactLink} href="mailto:hello@macoto.co.uk">hello@macoto.co.uk</a>
          </div>
        </div>
      </Container>
    </div >
  )
}

export default WorkWithMe;