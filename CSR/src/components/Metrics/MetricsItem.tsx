import { ReactNode } from 'react';

import styles from './Metrics.module.scss';

type MetricsItemProps = {
  name: string;
  value: string | ReactNode;
};

export const MetricsItem = ({ name, value }: MetricsItemProps) => {
  return (
    <hgroup className={styles['metrics-item']}>
      <h3 className={styles['metrics-item__title']}>{name}</h3>
      <p className={styles['metrics-item__value']}>{value}</p>
    </hgroup>
  );
};
