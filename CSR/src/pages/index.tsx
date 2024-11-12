import { createBrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import { Layout } from './Layout';
import { FCP, FMP, TTFB, TTI } from './Performance';
import { DynamicLoading, Interaction } from './UX';
import { Indexing, Ranking } from './SEO';
import { Caching, Rendering } from './Data';
import { Resources } from './Resources';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        id: 'Home',
        element: <Home />,
      },
      {
        path: '/performance',
        id: 'Performance',
        children: [
          {
            path: 'ttfb',
            id: 'TTFB',
            element: <TTFB />,
          },
          {
            path: 'fcp',
            id: 'FCP',
            element: <FCP />,
          },
          {
            path: 'fmp',
            id: 'FMP',
            element: <FMP />,
          },
          {
            path: 'tti',
            id: 'TTI',
            element: <TTI />,
          },
        ],
      },
      {
        path: '/ux',
        id: 'UX',
        children: [
          {
            path: 'interaction',
            id: 'Interaction',
            element: <Interaction />,
          },
          {
            path: 'dynamic-loading',
            id: 'DynamicLoading',
            element: <DynamicLoading />,
          },
        ],
      },
      {
        path: '/seo',
        id: 'SEO',
        children: [
          {
            path: 'indexing',
            id: 'Indexing',
            element: <Indexing />,
          },
          {
            path: 'ranking',
            id: 'Ranking',
            element: <Ranking />,
          },
        ],
      },
      {
        path: '/data',
        id: 'Data',
        children: [
          {
            path: 'caching',
            id: 'Caching',
            element: <Caching />,
          },
          {
            path: 'rendering',
            id: 'Rendering',
            element: <Rendering />,
          },
        ],
      },
      {
        path: '/resources',
        id: 'Resources',
        element: <Resources />,
      },
    ],
  },
]);
