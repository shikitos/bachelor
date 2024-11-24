import styles from '../HeavyJSBundles.module.scss';

// Simulate a complex UI with many elements
export const HeavyComponent = () => {
  const renderItems = () => {
    let items = [];
    for (let i = 0; i < 1000; i++) {
      items.push(
        <div key={i} className={styles.item}>
          Item {i}
        </div>
      );
    }
    return items;
  };

  return (
    <div className={styles.container}>
      <h2>Heavy Component Loaded</h2>
      <div className={styles.list}>{renderItems()}</div>
    </div>
  );
};
