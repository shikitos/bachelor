import { useDashboard } from '../libs/useDashboard';
import styles from './Data.module.scss';
import { Dataset } from './Dataset';
import { Labels } from './Labels';

export const Data = () => {
  const { chartData, onDatasetAdd } = useDashboard();

  return (
    <div className={styles.container}>
      <div className={styles['container-datasets']}>
        <Labels />
        {chartData.datasets.map((dataset, index) => (
          <Dataset dataset={dataset} index={index} />
        ))}
        <button
          onClick={onDatasetAdd}
          className={styles['container-datasets__add']}
        >
          Add dataset
        </button>
      </div>
    </div>
  );
};
