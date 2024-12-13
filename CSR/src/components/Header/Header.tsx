import { Dropdown } from 'components';
import { router } from 'pages';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
  const ROUTES = router.routes[0].children;
  return (
    <header className={styles.header}>
      <nav className={styles['header-nav']}>
        {ROUTES?.map((route, index) =>
          route.children ? (
            <Dropdown
              key={index}
              trigger={route.id as string}
              items={route.children.map((child) => (
                <Link
                  key={index}
                  to={`${route.path}/${child.path?.replace('/*', '')}`}
                  className={styles['header-nav__link']}
                >
                  {child.id}
                </Link>
              ))}
            />
          ) : (
            <Link
              key={index}
              to={route.path!}
              className={styles['header-nav__link']}
            >
              {route.id}
            </Link>
          )
        )}
      </nav>
    </header>
  );
};
