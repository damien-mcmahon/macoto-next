import cx from 'classnames';
import DiscoSVG from '../../svgs/discover.svg'
import FCSVG from '../../svgs/fc.svg.js';
import CMCSVG from '../../svgs/cmc.svg'
import MetroSVG from '../../svgs/metro.svg';
import ZoneSVG from '../../svgs/zone.svg';
import Container from '../Container/index.js';

import styles from './workedwith.module.scss'

const companies = [{
  href: 'https://fundingcircle.com',
  svg: FCSVG
}, {
  href: 'https://cmcmarkets.com',
  svg: CMCSVG
}, {
  href: 'https://metrobankonline.co.uk',
  svg: MetroSVG
}, {
  href: 'https://zonedigital.com',
  svg: ZoneSVG
}, {
  href: 'https://discover.com',
  svg: DiscoSVG
}]

const CompanyWrapper = ({ href, svg: CompanySVG }) => (
  <div className={styles.companyWrapper}>
    <a href={href} className={styles.companyLink} target="_blank" rel="noopner">
      <CompanySVG className={styles.svg} />
    </a>
  </div>
)

const WorkedWith = () => (
  <div className={cx('sectionWrapper', styles.wrapper)}>
    <Container>
      <h1 className={cx('sectionTitle', styles.wrapperHeader)}>I've worked with:</h1>
      <div className={styles.iconWrapper}>
        {companies.map(c => (
          <CompanyWrapper key={c.href} {...c} />
        ))}
      </div>
    </Container>

  </div>
);

export default WorkedWith;