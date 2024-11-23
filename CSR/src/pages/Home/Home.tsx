import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <h1>Bachelor Project</h1>
      <section>
        <h2>Available Pages</h2>
        <ul>
          <li>
            <h3>1. Производительность загрузки страницы</h3>
            <ul>
              <li>
                <Link to="/performance/ttfb">Time to First Byte (TTFB)</Link>
              </li>
              <li>
                <Link to="/performance/fcp">First Contentful Paint (FCP)</Link>
              </li>
              <li>
                <Link to="/performance/fmp">First Meaningful Paint (FMP)</Link>
              </li>
              <li>
                <Link to="/performance/tti">Time to Interactive (TTI)</Link>
              </li>
            </ul>
          </li>
          <li>
            <h3>2. Восприятие пользователем и отзывчивость интерфейса</h3>
            <ul>
              <li>
                <Link to="/ux/interaction">Время отклика на действия</Link>
              </li>
              <li>
                <Link to="/ux/dynamic-loading">Динамическая загрузка компонентов</Link>
              </li>
            </ul>
          </li>
          <li>
            <h3>3. Влияние на SEO</h3>
            <ul>
              <li>
                <Link to="/seo/indexing">Индексация страниц</Link>
              </li>
              <li>
                <Link to="/seo/ranking">Ранжирование страниц</Link>
              </li>
            </ul>
          </li>
          <li>
            <h3>4. Рендеринг и повторная загрузка данных</h3>
            <ul>
              <li>
                <Link to="/data/rendering">Повторный рендеринг данных</Link>
              </li>
              <li>
                <Link to="/data/caching">Кэширование данных</Link>
              </li>
            </ul>
          </li>
          <li>
            <h3>5. Потребление ресурсов на сервере и клиенте</h3>
            <ul>
              <li>
                <Link to="/resources/server">Нагрузка на сервер</Link>
              </li>
              <li>
                <Link to="/resources/client">Нагрузка на клиент</Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  );
};
