import { createRef } from 'react';
import styles from './headshot.module.scss'

const Headshot = () => {
  const bgRef = createRef();
  const wrapperRef = createRef();

  const setPosition = (e) => {
    const elPos = e.target.getBoundingClientRect();
    const x = e.clientX - elPos.left;
    const y = e.clientY - elPos.top;
    const midX = elPos.width / 2;
    const midY = elPos.height / 2;
    const stepsX = 80;
    const stepsY = 80;
    const clampedX = x - midX;
    const clampedY = midY - y;

    bgRef.current.style.setProperty('--x', `${x}px`);
    wrapperRef.current.style.setProperty('--picX', `${Math.floor(clampedX / stepsX)}deg`);
    wrapperRef.current.style.setProperty('--picY', `${Math.floor(clampedY / stepsY)}deg`);
    bgRef.current.style.setProperty('--y', `${y}px`);
  }

  const resetPostitions = (e) => {

    wrapperRef.current.style.setProperty('--picX', '0deg');
    wrapperRef.current.style.setProperty('--picY', '0deg');
  }

  return (
    <div className={styles.pictureWrapper}
      onMouseMove={setPosition} ref={wrapperRef} onMouseOut={resetPostitions}>
      <div className={styles.pictureBg} ref={bgRef} />
      <div className={styles.picture} />
    </div>
  )
}



export default Headshot;