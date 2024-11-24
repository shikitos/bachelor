import { useMemo, useState } from 'react';

import styles from './ClientCalculations.module.scss';

const generatePrimes = (max: number) => {
  const primes = [];
  const sieve = Array(max + 1).fill(true);
  sieve[0] = sieve[1] = false;

  for (let p = 2; p <= max; p++) {
    if (sieve[p]) {
      primes.push(p);
      for (let multiple = p * p; multiple <= max; multiple += p) {
        sieve[multiple] = false;
      }
    }
  }

  return primes;
};

const multiplyMatrices = (matrixA: number[][], matrixB: number[][]) => {
  const result: number[][] = Array(matrixA.length)
    .fill(null)
    .map(() => Array(matrixB[0].length).fill(0));

  for (let i = 0; i < matrixA.length; i++) {
    for (let j = 0; j < matrixB[0].length; j++) {
      for (let k = 0; k < matrixA[0].length; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  return result;
};

export const ClientCalculations = () => {
  const [primeLimit, setPrimeLimit] = useState(10000);
  const [matrixSize, setMatrixSize] = useState(10);

  const primes = useMemo(() => generatePrimes(primeLimit), [primeLimit]);
  const matrixResult = useMemo(() => {
    const matrixA = Array.from({ length: matrixSize }, () =>
      Array.from({ length: matrixSize }, () => Math.floor(Math.random() * 10))
    );
    const matrixB = Array.from({ length: matrixSize }, () =>
      Array.from({ length: matrixSize }, () => Math.floor(Math.random() * 10))
    );
    return multiplyMatrices(matrixA, matrixB);
  }, [matrixSize]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Client Calculations</h1>
        <p>Showcasing heavy computations in the browser</p>
      </header>
      <section className={styles.content}>
        <div className={styles.calculationBlock}>
          <h2>Prime Number Generator</h2>
          <label>
            Calculate primes up to:
            <input
              type="number"
              value={primeLimit}
              onChange={(e) => setPrimeLimit(Number(e.target.value))}
              min={10}
              max={100000}
              className={styles.input}
            />
          </label>
          <p>
            Found <strong>{primes.length}</strong> primes up to {primeLimit}.
          </p>
          <div className={styles.result}>
            {primes.slice(0, 100).join(', ')} {primes.length > 100 && '...'}
          </div>
        </div>

        <div className={styles.calculationBlock}>
          <h2>Matrix Multiplication</h2>
          <label>
            Matrix size (NxN):
            <input
              type="number"
              value={matrixSize}
              onChange={(e) => setMatrixSize(Number(e.target.value))}
              min={2}
              max={20}
              className={styles.input}
            />
          </label>
          <p>
            Result of multiplying two {matrixSize}x{matrixSize} matrices:
          </p>
          <div className={styles.result}>
            {matrixResult.map((row, i) => (
              <div key={i} className={styles.matrixRow}>
                {row.join(', ')}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
