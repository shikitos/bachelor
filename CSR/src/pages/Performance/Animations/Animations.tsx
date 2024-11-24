import { useEffect, useState } from 'react';

import styles from './Animations.module.scss';

const generateSquares = (count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: Math.random() * 90 + '%',
    top: Math.random() * 90 + '%',
    size: Math.random() * 40 + 20 + 'px',
    color: `hsl(${Math.random() * 360}, 70%, 70%)`,
  }));
};

export const Animations = () => {
  const [squares, setSquares] = useState(generateSquares(100));

  useEffect(() => {
    const interval = setInterval(() => {
      setSquares((prev) =>
        prev.map((square) => ({
          ...square,
          left: Math.random() * 90 + '%',
          top: Math.random() * 90 + '%',
          size: Math.random() * 40 + 20 + 'px',
          color: `hsl(${Math.random() * 360}, 70%, 70%)`,
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Complex Animations</h1>
      <div className={styles.squareContainer}>
        {squares.map((square) => (
          <div
            key={square.id}
            className={`${styles.square} ${styles.active}`}
            style={{
              left: square.left,
              top: square.top,
              width: square.size,
              height: square.size,
              backgroundColor: square.color,
            }}
          />
        ))}
      </div>
    </div>
  );
};
