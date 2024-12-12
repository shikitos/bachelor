import { Stars, OrbitControls, Stats } from '@react-three/drei';
import { Canvas as ThreeCanvas } from '@react-three/fiber';
import { useRef, Suspense, useState } from 'react';
import { SpinningCube } from './SpinningCube';
import { CameraAnimator } from '../libs';
import styles from '../WebGL.module.scss';

export const Canvas = () => {
  const canvas = useRef(null);
  const [controlsEnabled, setControlsEnabled] = useState(false);

  const handleAnimationEnd = () => {
    setControlsEnabled(true);
  };

  return (
    <ThreeCanvas camera={{ position: [10, 10, 10] }} ref={canvas} shadows>
      <ambientLight intensity={0.3} />

      <spotLight position={[10, 10, 10]} angle={0.3} intensity={1} castShadow />

      <Stars
        radius={100}
        depth={50}
        count={50000}
        factor={4}
        saturation={0}
        fade
      />

      <Suspense fallback={null}>
        <SpinningCube />
      </Suspense>
      <OrbitControls enabled={controlsEnabled} />
      <Stats parent={canvas} className={styles.stats} />
      <CameraAnimator onAnimationEnd={handleAnimationEnd} />
    </ThreeCanvas>
  );
};
