import styles from './container.module.scss'
import cx from 'classnames';

const Container = ({ children, className }) => (
  <div className={cx(styles.wrapper, className)}>
    {children}
  </div>
)

export default Container;