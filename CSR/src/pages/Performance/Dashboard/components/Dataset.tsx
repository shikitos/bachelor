import { ChartData } from 'chart.js';

import { useDashboard } from '../libs/useDashboard';
import styles from './Data.module.scss';

type Props = {
  dataset: ChartData['datasets'][number];
  index: number;
};

export const Dataset = ({ dataset, index }: Props) => {
  const { onDatasetDataChange, onDatasetDataAdd, onDatasetChange } =
    useDashboard();

  return (
    <ul
      className={styles['container-datasets__item']}
      key={`${index}: ${dataset.label}`}
      data-index={index}
    >
      <h3>{dataset.label}</h3>
      <li className={styles.data}>
        <label>Data</label>
        <div className={styles.data__inputs}>
          {dataset.data.map((data, dataIndex) => (
            <input
              data-index={dataIndex}
              key={dataIndex}
              type="number"
              name="data"
              value={data as number}
              onChange={onDatasetDataChange}
            />
          ))}
          <button onClick={onDatasetDataAdd} className={styles.data__add}>
            +
          </button>
        </div>
      </li>
      <li className={styles.color}>
        <label>Color</label>
        <input
          type="color"
          name="borderColor"
          value={dataset.borderColor as string}
          onChange={onDatasetChange}
        />
      </li>
      <li className={styles.Color}>
        <label>Background Color</label>
        <input
          type="color"
          name="backgroundColor"
          value={dataset.backgroundColor as string}
          onChange={onDatasetChange}
        />
      </li>
    </ul>
  );
};
