import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { CHART_DATA, CHART_OPTIONS, DASHBOARD_CONTEXT_INITIAL } from '../constants';
import { DashboardContextType } from '../types';

const DashboardContext = createContext<DashboardContextType>(
  DASHBOARD_CONTEXT_INITIAL
);
const DashboardProvider = ({ children }: PropsWithChildren) => {
  const [chartData, setChartData] = useState(CHART_DATA);
  const [chartOptions, setChartOptions] = useState(CHART_OPTIONS);

  const value = {
    chartData,
    setChartData,
    chartOptions,
    setChartOptions,
  };
  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
const useDashboardContext = () => useContext(DashboardContext);
export { DashboardProvider, useDashboardContext };
