import { ChartOptions } from 'chart.js';

export const CHART_OPTIONS: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Revenue vs Expenses Over Time',
    },
  },
};
