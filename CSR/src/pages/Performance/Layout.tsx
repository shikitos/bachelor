import { Metrics, SkeletonLoader } from 'components';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { useMetrics } from './_libs';

export const PerformanceLayout = () => {
  const { metrics } = useMetrics();

  return (
    <>
      <Metrics>
        {metrics?.map((metric, index) => (
          <Suspense fallback={<SkeletonLoader />} key={index}>
            <Metrics.Item
              name={metric.name}
              value={metric.value ?? <SkeletonLoader />}
            />
          </Suspense>
        ))}
      </Metrics>

      <Outlet />
    </>
  );
};
