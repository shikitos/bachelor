import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>

      <footer>
        <p>© 2024 Your Project</p>
      </footer>
    </div>
  );
};
