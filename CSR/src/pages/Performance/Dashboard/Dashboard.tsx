import { Chart, Data } from './components';
import styles from './Dashboard.module.scss';
import { DashboardProvider } from './providers';

export const Dashboard = () => {
  return (
    <DashboardProvider>
      <div className={styles.container}>
        <h1 className={styles.title}>Dashboard</h1>
        <div className={styles.chartContainer}>
          <Chart />
        </div>
        <div>
          <Data />
        </div>
      </div>
    </DashboardProvider>
  );
};
