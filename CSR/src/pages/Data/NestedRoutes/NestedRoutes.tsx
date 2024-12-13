import { lazy, Suspense } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

const Home = lazy(() =>
  import('./components').then((c) => ({ default: c.Home }))
);
const LevelOne = lazy(() =>
  import('./components').then((c) => ({ default: c.LevelOne }))
);
const LevelTwo = lazy(() =>
  import('./components').then((c) => ({ default: c.LevelTwo }))
);
const LevelThree = lazy(() =>
  import('./components').then((c) => ({ default: c.LevelThree }))
);

export const NestedRoutes = () => (
  <div className="nested-routes-page">
    <nav>
      <ul>
        <li>
          <Link to="/data/nested-routes">Home</Link>
        </li>
        <li>
          <Link to="level1">Level 1</Link>
        </li>
      </ul>
    </nav>

    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="level1" element={<LevelOne />}>
            <Route path="level2" element={<LevelTwo />}>
              <Route path="level3" element={<LevelThree />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  </div>
);
