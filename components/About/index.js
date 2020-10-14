import cx from 'classnames';
import { useInView } from 'react-intersection-observer'

import Container from '../Container'
import styles from './about.module.scss'

const AboutImage = (props) => (
  <div className={styles.aboutImage}>
    <img {...props} />
  </div>
)

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  return (
    <div className="sectionWrapper" ref={ref}>
      <Container>
        <h1 className={cx('sectionTitle', styles.subTitle, {
          [styles.redText]: inView
        })}>About Me</h1>

        <div className={styles.aboutWrapper}>

          <div className={styles.aboutTextWrapper}>
            <p>I’ve been a developer for over 12 years and in that time seen the Web evolve into the platform it is today. I’ve seen HTML, CSS and Javascript mature as tools used in the browser as well as become the tools of choice beyond the browser.  I’m a firm believer that the Web is the right place for cross-platform delivery of services and I have used React Native to bridge the gap with Mobile platforms too.</p>

            <p>I’m passionate about balancing a good developer experience with being able to deliver for clients at a good pace. The evolution of the tools available to Developers along with the ways of structuring and scaling app development is something I continually invest in and I’m always seeking to be able to share this with the clients I’ve worked with.</p>

            <p>I enjoy leading and mentoring other developers, I aim to give clear constraints and follow some basic principles to help reduce complexity in what is a fast paced and often very complex environment to work in. Simple things such as writing readable code, reducing complexity in problem solving, looking for established solutions and aiming for convention over configuration can help achieve this. I continue to look for best practices and ways in which these constraints can be scaled across teams of various sizes.</p>
          </div>
          <AboutImage src="/images/selfie.jpg" />
        </div>
      </Container>
    </div>
  );
}

export default About;