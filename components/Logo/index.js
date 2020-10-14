import Link from 'next/link';
import cx from 'classnames';

import styles from './logo.module.scss'

const Logo = ({ className }) => (
  <div className={cx(className, styles.wrapper)}>
    <Link href="/" className={styles.logo}>
      <h1 className={styles.logoText}>MA<br />CO<br />TO</h1>
    </Link>
  </div>
)

export default Logo;