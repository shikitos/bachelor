import {
    CategoryScale, Chart as ChartPlugin, Legend, LinearScale, LineElement, PointElement, Title,
    Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { useDashboard } from '../libs/useDashboard';

ChartPlugin.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = () => {
  const { chartData, chartOptions } = useDashboard();

  return <Line data={chartData} options={chartOptions} />;
};
