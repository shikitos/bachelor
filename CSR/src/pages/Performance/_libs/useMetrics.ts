import { api } from 'api';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

type Metrics = {
  name: string;
  value?: number | string;
};

const METRICS = [
  { name: 'CLS' },
  { name: 'FCP' },
  { name: 'FID' },
  { name: 'LCP' },
  { name: 'TTFB' },
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
    setMetrics(METRICS);
    const handleMetric = async (metric: { name: string; value: number }) => {
      postMetrics(metric);
      setMetrics((prevMetrics) =>
        prevMetrics.map((m) =>
          m.name === metric.name
            ? { ...m, value: `${metric.value.toFixed(2)}ms` }
            : m
        )
      );
    };

    onCLS(handleMetric);
    onFID(handleMetric);
    onLCP(handleMetric);
    onFCP(handleMetric);
    onTTFB(handleMetric);
  }, [pathname]);

  return {
    metrics,
  };
};
