import { api } from 'api';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

type Metrics = {
  name: string;
  value?: number | string;
};

const METRICS = [
  { name: 'FCP' },
  { name: 'FID' },
  { name: 'LCP' },
  { name: 'TTFB' },
  { name: 'domInteractive' },
  { name: 'loadEventEnd' },
  { name: 'domContentLoadedEventEnd' },
];

export const useMetrics = () => {
  const [metrics, setMetrics] = useState<Metrics[]>(METRICS);
  const { pathname } = useLocation();
  const postedMetricsRef = useRef(new Set<string>());

  async function postMetrics(metrics: Metrics) {
    if (!metrics.value) return;

    const metricKey = `${metrics.name}-${pathname}`;
    if (postedMetricsRef.current.has(metricKey)) return;

    const data = {
      type: metrics.name,
      value: +Number(metrics.value).toFixed(2),
      page: pathname,
      origin: 'CSR',
      date: new Date(),
    };

    await api.post('/metrics', data);
    postedMetricsRef.current.add(metricKey);
  }

  useEffect(() => {
    const handleMetric = (metric: { name: string; value: number }) => {
      postMetrics(metric);
      setMetrics((prevMetrics) =>
        prevMetrics.map((m) =>
          m.name === metric.name
            ? { ...m, value: `${metric.value.toFixed(2)}ms` }
            : m
        )
      );
    };

    onFID(handleMetric);
    onLCP(handleMetric);
    onFCP(handleMetric);
    onTTFB(handleMetric);

    const navTiming = performance.getEntriesByType(
      'navigation'
    )[0] as PerformanceNavigationTiming;
    if (!navTiming) return;
    console.log({ navTiming });
    handleMetric({ name: 'domInteractive', value: navTiming.domInteractive });
    handleMetric({ name: 'loadEventEnd', value: navTiming.loadEventEnd });
    handleMetric({
      name: 'domContentLoadedEventEnd',
      value: navTiming.domContentLoadedEventEnd,
    });
  }, [pathname]);

  return {
    metrics,
  };
};
