import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { router } from 'pages';
import { Dropdown } from 'components';

export const Header = () => {
  const ROUTES = router.routes[0].children;
  console.log(ROUTES);
  return (
    <header className={styles.header}>
      <nav className={styles['header-nav']}>
        {ROUTES?.map((route, index) =>
          route.children ? (
            <Dropdown
              trigger={route.id as string}
              items={route.children.map((child) => (
                <Link
                  key={index}
                  to={`${route.path}/${child.path}`}
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
