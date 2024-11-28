import { api } from 'api';
import { Metrics } from 'api/types';
import { useEffect, useState } from 'react';

export const useResources = () => {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [metrics, setMetrics] = useState<Metrics[] | null>(null);

  const filteredMetrics =
    metrics?.filter(
      (metric) =>
        (!selectedPage || metric.page === selectedPage) &&
        (!selectedMetric || metric.type === selectedMetric)
    ) ?? [];

  const chartData = {
    labels: Array.from(new Set(filteredMetrics.map((metric) => metric.page))),
    datasets: [
      {
        label: 'SSR',
        data: filteredMetrics
          .filter((metric) => metric.origin === 'SSR')
          .map((metric) => metric.value),
        backgroundColor: 'rgba(0, 230, 118, 0.2)',
        borderColor: 'rgba(0, 230, 118, 1)',
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: 'CSR',
        data: filteredMetrics
          .filter((metric) => metric.origin === 'CSR')
          .map((metric) => metric.value),
        backgroundColor: 'rgba(255, 64, 129, 0.2)',
        borderColor: 'rgba(255, 64, 129, 1)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#e0e0e0',
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) =>
            `${context.dataset.label}: ${context.raw} ms`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#e0e0e0',
        },
      },
      y: {
        ticks: {
          color: '#e0e0e0',
        },
      },
    },
  };

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const { metrics } = await api.get<{ metrics: Metrics[] }>('/metrics');
        setMetrics(metrics);
      } catch (error) {
        console.error('Error fetching metrics:', error);
        setMetrics([]);
      }
    };

    fetchMetrics();
  }, []);

  return {
    metrics,
    setSelectedMetric,
    setSelectedPage,
    filteredMetrics,
    chartData,
    chartOptions,
  };
};
