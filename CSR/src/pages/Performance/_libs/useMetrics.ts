import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

type Metrics = {
  name: string;
  value?: string;
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

  useEffect(() => {
    setMetrics(METRICS);
    const handleMetric = (metric: { name: string; value: number }) => {
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
