import { ChartData } from 'chart.js';

export const CHART_DATA: ChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Revenue',
      data: [5000, 8000, 6000, 10000, 15000, 20000],
      borderColor: '#007bff',
      backgroundColor: 'rgba(0, 123, 255, 0.2)',
      fill: true,
    },
    {
      label: 'Expenses',
      data: [4000, 5000, 4000, 7000, 9000, 12000],
      borderColor: '#dc3545',
      backgroundColor: 'rgba(220, 53, 69, 0.2)',
      fill: true,
    },
  ],
};
