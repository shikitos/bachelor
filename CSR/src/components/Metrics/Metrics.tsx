import { PropsWithChildren } from 'react';

import styles from './Metrics.module.scss';
import { MetricsItem } from './MetricsItem';

type MetricsProps = PropsWithChildren;

export const Metrics = ({ children }: MetricsProps) => {
  return <section className={styles.metrics}>{children}</section>;
};

Metrics.Item = MetricsItem;
