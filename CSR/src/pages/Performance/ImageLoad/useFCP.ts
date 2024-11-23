import { useState, useEffect } from 'react';
import { onFCP } from 'web-vitals/attribution';

export const useFCP = () => {
  const [fcp, setFcp] = useState<string | null>(null);
  useEffect(() => {
    onFCP((metric) => setFcp(metric.value.toFixed(2)));
  }, []);
  return { fcp };
};
