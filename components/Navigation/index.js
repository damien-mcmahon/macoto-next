import Link from 'next/link';
import styles from './navigation.module.css';

const LINKS = [];
/*[{
  title: 'CV',
  href: '/cv'
}, {
  title: 'About',
  href: '/about'
}];
*/

const Navigation = () => (
  <nav className={styles.nav}>
    {LINKS.map(l => (
      <Link href={l.href}>{l.title}</Link>
    ))}
  </nav>
);

export default Navigation