import { lazy, Suspense, useEffect, useState } from 'react';

import styles from './HeavyJSBundles.module.scss';

// Simulate a heavy computation
const heavyComputation = () => {
  let result = 0;
  for (let i = 0; i < 1e8; i++) {
    result += Math.sqrt(i);
  }
  return result;
};

// Lazy-loaded component to simulate large JS bundle
const HeavyComponent = lazy(() =>
  import('./components/HeavyComponent').then((module) => ({
    default: module.HeavyComponent,
  }))
);

export const HeavyJSBundles = () => {
  const [computationResult, setComputationResult] = useState<number | null>(
    null
  );

  useEffect(() => {
    // Simulate heavy JS computation
    const result = heavyComputation();
    setComputationResult(result);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Performance Heavy JavaScript Bundle</h1>

      <div className={styles.content}>
        <p>
          This page simulates a heavy JavaScript bundle by performing intensive
          calculations and lazy loading components.
        </p>

        <h2>Heavy Computation Result:</h2>
        {computationResult !== null ? (
          <p>Computation finished: {computationResult}</p>
        ) : (
          <p>Performing computation...</p>
        )}

        {/* Lazy load the HeavyComponent */}
        <Suspense fallback={<p>Loading heavy component...</p>}>
          <HeavyComponent />
        </Suspense>
      </div>
    </div>
  );
};
