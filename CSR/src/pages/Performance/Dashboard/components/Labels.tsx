import { useDashboard } from '../libs/useDashboard';
import styles from './Data.module.scss';

export const Labels = () => {
  const { chartData, onLabelsChange } = useDashboard();

  return (
    <div className={styles.labels}>
      <h3>Labels</h3>
      <div className={styles['labels__inputs']}>
        {chartData.labels!.map((label, index) => (
          <input
            data-index={index}
            key={index}
            type="text"
            name="labels"
            value={label as string}
            onChange={onLabelsChange}
          />
        ))}
      </div>
    </div>
  );
};
