import { useState } from 'react';

import styles from './Search.module.scss';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchResults = async (searchQuery) => {
    if (!searchQuery) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?q=${encodeURIComponent(
          searchQuery
        )}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch results.');
      }
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchResults(value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Posts</h1>
      <input
        type="text"
        placeholder="Search for posts..."
        className={styles.searchInput}
        value={query}
        onChange={handleChange}
      />

      {loading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>Error: {error}</p>}

      <ul className={styles.resultsList}>
        {results.map((result) => (
          <li key={result.id} className={styles.resultItem}>
            <h3>{result.title}</h3>
            <p>{result.body}</p>
          </li>
        ))}
      </ul>

      {!loading && !results.length && query && (
        <p className={styles.noResults}>No results found for "{query}".</p>
      )}
    </div>
  );
};
