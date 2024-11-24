import { useState } from 'react';

import styles from './Rendering.module.scss';

const simulateRendering = (strategy: string, delay = 1000): Promise<string> =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`${strategy} completed!`), delay)
  );

export const Rendering = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleRender = async (strategy: string) => {
    setLoading(true);
    setResult('');
    try {
      const response = await simulateRendering(strategy);
      setResult(response);
    } catch (error) {
      console.error(`Error with ${strategy}:`, error);
      setResult('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Rendering Strategies</h1>
      <p>
        Learn about and test different rendering strategies. Click a button to
        simulate rendering via Server-Side Rendering (SSR), Client-Side
        Rendering (CSR), or Static Site Generation (SSG).
      </p>

      <div className={styles.buttons}>
        <button
          onClick={() => handleRender('Server-Side Rendering')}
          disabled={loading}
          className={styles.button}
        >
          Simulate SSR
        </button>
        <button
          onClick={() => handleRender('Client-Side Rendering')}
          disabled={loading}
          className={styles.button}
        >
          Simulate CSR
        </button>
        <button
          onClick={() => handleRender('Static Site Generation')}
          disabled={loading}
          className={styles.button}
        >
          Simulate SSG
        </button>
      </div>

      <div className={styles.result}>
        {loading ? (
          <p>Rendering in progress...</p>
        ) : (
          <p>{result || 'No strategy selected.'}</p>
        )}
      </div>
    </div>
  );
};
