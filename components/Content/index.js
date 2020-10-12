import styles from './content.module.scss';

const Content = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
)

export default Content;