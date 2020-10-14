
import EmailSVG from '../../svgs/email.svg';
import InstaSVG from '../../svgs/insta.svg';
import LinkedInSVG from '../../svgs/linkedin.svg';
import GithubSVG from '../../svgs/github.svg'

import styles from './socials.module.scss'

const email = 'mailto:hello@macoto.co.uk'
const instagram = 'https://instagram.com/macoto_'
const linkedIn = 'https://www.linkedin.com/in/damienmcmahon/'
const github = 'https://github.com/damien-mcmahon'

const Link = ({ children, href }) => (
  <a href={href} target="_blank" rel="noopener">{children}</a>
)

const Socials = () => (
  <div className={styles.socialWrapper}>
    <Link href={email} className={styles.socialItemWrapper}>
      <EmailSVG className={styles.socialItem} />
    </Link>

    <Link href={linkedIn} className={styles.socialItemWrapper}>
      <LinkedInSVG className={styles.socialItem} />
    </Link>

    <Link href={instagram} className={styles.socialItemWrapper}>
      <InstaSVG className={styles.socialItem} />
    </Link>

    <Link href={github} className={styles.socialItemWrapper}>
      <GithubSVG className={styles.socialItem} />
    </Link>
  </div>
)

export default Socials;