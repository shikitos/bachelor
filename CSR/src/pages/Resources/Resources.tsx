import { Line } from 'react-chartjs-2';

import { useResources } from './libs';
import styles from './Resources.module.scss';

export const Resources = () => {
  const {
    metrics,
    setSelectedMetric,
    filteredMetrics,
    chartData,
    chartOptions,
    setSelectedPage,
  } = useResources();
  if (!metrics) return <div className={styles.loading}>Loading data...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Experiment Metrics Dashboard</h1>

      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <label htmlFor="pageSelect">Filter by Page:</label>
          <select
            id="pageSelect"
            onChange={(e) => setSelectedPage(e.target.value || null)}
            className={styles.select}
          >
            <option value="">All Pages</option>
            {Array.from(new Set(metrics.map((metric) => metric.page))).map(
              (page) => (
                <option key={page} value={page}>
                  {page}
                </option>
              )
            )}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="metricSelect">Filter by Metric:</label>
          <select
            id="metricSelect"
            onChange={(e) => setSelectedMetric(e.target.value || null)}
            className={styles.select}
          >
            <option value="">All Metrics</option>
            {Array.from(new Set(metrics.map((metric) => metric.type))).map(
              (type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      <div className={styles.chart}>
        {filteredMetrics!.length > 0 ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <p className={styles.noData}>No data to display. Adjust filters.</p>
        )}
      </div>
    </div>
  );
};
