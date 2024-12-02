import { lazy, Suspense, useState } from 'react';
import styles from './Info.module.scss';
import { METRICS_LIST } from './constants';

const MetricDetails = lazy(() =>
  import('./components/Details').then((m) => ({ default: m.Details }))
);

export const Info = () => {
  const [activeMetric, setActiveMetric] = useState<string | null>(null);

  const toggleMetric = (metricName: string) => {
    setActiveMetric(activeMetric === metricName ? null : metricName);
  };

  return (
    <div className={styles.info}>
      <h1 className={styles.info__title}>Performance Metrics</h1>
      <p className={styles.info__description}>
        Below is an overview of critical performance metrics used to measure and
        analyze web application performance. Click on a metric to learn more.
      </p>
      <div className={styles['info-metrics']}>
        {METRICS_LIST.map((metric) => (
          <div key={metric.name} className={styles['info-metrics__item']}>
            <button
              className={styles.button}
              onClick={() => toggleMetric(metric.name)}
            >
              {metric.name}
            </button>
            {activeMetric === metric.name && (
              <Suspense fallback={<div>Loading details...</div>}>
                <MetricDetails {...metric} />
              </Suspense>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
