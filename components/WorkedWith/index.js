import DiscoSVG from '../../svgs/discover.svg'
import FCSVG from '../../svgs/fc.svg.js';
import CMCSVG from '../../svgs/cmc.svg'
import MetroSVG from '../../svgs/metro.svg';
import ZoneSVG from '../../svgs/zone.svg';
import Container from '../Container/index.js';

import styles from './workedwith.module.scss'

const WorkedWith = () => (
  <div className={styles.wrapper}>
    <Container>
      <h1>Here's some of the Companies I've worked with</h1>
      <div className={styles.iconWrapper}>
        <FCSVG className={styles.svg} />
        <CMCSVG className={styles.svg} />
        <MetroSVG className={styles.svg} />
        <ZoneSVG className={styles.svg} />
        <DiscoSVG className={styles.svg} />
      </div>
    </Container>
  </div>
);

export default WorkedWith;