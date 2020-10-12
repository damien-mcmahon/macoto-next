import styles from './main.module.scss';

const Main = ({ children }) => (
  <main className={styles.wrapper}>
    {children}
  </main>
)

export default Main;