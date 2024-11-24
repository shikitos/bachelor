import { useState } from 'react';

import styles from './Caching.module.scss';

const simulateFetch = (data: string, delay = 1000): Promise<string> =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));

export const Caching = () => {
  const [cache, setCache] = useState<Map<string, string>>(new Map());
  const [data, setData] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const fetchData = async (key: string, useCache: boolean) => {
    setLoading(true);

    if (useCache && cache.has(key)) {
      setData(cache.get(key) || '');
    } else {
      const fetchedData = await simulateFetch(`Data for ${key}`);
      setCache((prevCache) => new Map(prevCache).set(key, fetchedData));
      setData(fetchedData);
    }

    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <h1>Caching Strategies</h1>
      <p>
        This page demonstrates different caching strategies and their impact on
        performance. Choose a key below to fetch data, with or without caching.
      </p>

      <div className={styles.buttons}>
        <button
          onClick={() => fetchData('key1', true)}
          disabled={loading}
          className={styles.button}
        >
          Fetch Key1 (With Cache)
        </button>
        <button
          onClick={() => fetchData('key1', false)}
          disabled={loading}
          className={styles.button}
        >
          Fetch Key1 (No Cache)
        </button>
        <button
          onClick={() => fetchData('key2', true)}
          disabled={loading}
          className={styles.button}
        >
          Fetch Key2 (With Cache)
        </button>
        <button
          onClick={() => fetchData('key2', false)}
          disabled={loading}
          className={styles.button}
        >
          Fetch Key2 (No Cache)
        </button>
      </div>

      <div className={styles.result}>
        {loading ? <p>Loading...</p> : <p>Fetched Data: {data || 'No data'}</p>}
      </div>
    </div>
  );
};
