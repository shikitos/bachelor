import { Canvas } from './components';
import styles from './WebGL.module.scss';

export const WebGL = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>
        3D Content with Three.js and React Three Fiber
      </h1>
      <Canvas />
    </div>
  );
};
