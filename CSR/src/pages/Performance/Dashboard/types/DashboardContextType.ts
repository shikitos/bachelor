import { ChartData, ChartOptions } from 'chart.js';
import { Dispatch } from 'react';

export type DashboardContextType = {
  chartData: ChartData;
  setChartData: Dispatch<React.SetStateAction<ChartData>>;
  chartOptions: ChartOptions;
  setChartOptions: Dispatch<React.SetStateAction<ChartOptions>>;
};
