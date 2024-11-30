import { router } from 'pages';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

export const Home = () => {
  const { t } = useTranslation();

  const ROUTES = router.routes[0];
  return (
    <section className={styles.home}>
      <h1 className={styles.home__title}>{t('home.title')}</h1>
      <div className={styles['home-content']}>
        <h2 className={styles['home-content__subtitle']}>
          {t('home.subtitle')}
        </h2>
        <nav className={styles['home-content__nav']}>
          <ul className={styles.routes}>
            {ROUTES.children?.map((route) => (
              <li key={route.id} className={styles['routes-route']}>
                <h3 className={styles['routes-route__name']}>
                  {t(`routes.${route.id}`)}
                </h3>
                <ul className={styles['routes-route__subroutes']}>
                  {route.children?.map((child, index) => (
                    <li key={index} className={styles.subroute}>
                      <Link
                        to={`${route.path}/${child.path}`}
                        className={styles.subroute__link}
                      >
                        {t(`routes.${child.id}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};
