import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

type Props = {
  onAnimationEnd?: () => void;
};

const DURATION = 5000;
const END_POSITION = { x: 2, y: 2, z: 2 };
export const CameraAnimator = ({ onAnimationEnd }: Props) => {
  const { camera } = useThree();

  useEffect(() => {
    const startPosition = {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
    };
    const startTime = Date.now();

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / DURATION, 1);

      camera.position.x =
        startPosition.x + (END_POSITION.x - startPosition.x) * progress;
      camera.position.y =
        startPosition.y + (END_POSITION.y - startPosition.y) * progress;
      camera.position.z =
        startPosition.z + (END_POSITION.z - startPosition.z) * progress;
      camera.updateProjectionMatrix();

      if (progress < 1) requestAnimationFrame(animate);
      if (progress !== 1 || !onAnimationEnd) return;
      onAnimationEnd();
    };

    animate();
  }, [camera, onAnimationEnd]);

  return null;
};
