import DiscoSVG from '../../svgs/discover.svg'
import FCSVG from '../../svgs/fc.svg.js';
import TABSVG from '../../svgs/tab.svg.js';
import COGSVG from '../../svgs/cog.svg.js'
import CMCSVG from '../../svgs/cmc.svg'
import MetroSVG from '../../svgs/metro.svg';
import ZoneSVG from '../../svgs/zone.svg';
import Container from '../Container/index.js';

import styles from './workedwith.module.scss'

const WorkedWith = () => (
  <div className={styles.wrapper}>
    <Container>
      <FCSVG className={styles.svg} />
      <TABSVG className={styles.svg} />
      <COGSVG className={styles.svg} />
      <CMCSVG className={styles.svg} />
      <MetroSVG className={styles.svg} />
      <ZoneSVG className={styles.svg} />
      <DiscoSVG className={styles.svg} />
    </Container>
  </div>
);

export default WorkedWith;