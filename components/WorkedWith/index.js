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
  svg: FCSVG,
  name: 'Funding Circle'
}, {
  href: 'https://cmcmarkets.com',
  svg: CMCSVG,
  name: 'CMC Markets'
}, {
  href: 'https://metrobankonline.co.uk',
  svg: MetroSVG,
  name: 'Metro Bank UK'
}, {
  href: 'https://zonedigital.com',
  svg: ZoneSVG,
  name: 'Zone Digital'
}, {
  href: 'https://discover.com',
  svg: DiscoSVG,
  name: 'Discover Financial Services'
}]

const CompanyWrapper = ({ href, svg: CompanySVG, name }) => (
  <div className={styles.companyWrapper}>
    <a href={href} className={styles.companyLink} target="_blank" rel="noopener">
      <CompanySVG className={styles.svg} />
      <span className={styles.companyName}>{name}</span>
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