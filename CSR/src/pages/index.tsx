import { createBrowserRouter } from 'react-router-dom';

import { Caching, Rendering } from './Data';
import { Home } from './Home';
import { Layout } from './Layout';
import { NotFound } from './NotFound';
import {
  Animations,
  Dashboard,
  DynamicContent,
  ImageLoad,
  InfiniteScroll,
  LargeDOM,
  PerformanceLayout,
  Search,
  Fonts,
} from './Performance';
import { Resources } from './Resources';
import { DynamicLoading, Interaction } from './UX';
import { Info } from './Info';

export const router = createBrowserRouter(
  [
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
          element: <PerformanceLayout />,
          children: [
            {
              path: 'animations',
              id: 'Animations',
              element: <Animations />,
            },
            {
              path: 'infinite-scroll',
              id: 'InfiniteScroll',
              element: <InfiniteScroll />,
            },
            {
              path: 'search',
              id: 'Search',
              element: <Search />,
            },
            {
              path: 'fonts',
              id: 'Fonts',
              element: <Fonts />,
            },
            {
              path: 'dashboard',
              id: 'Dashboard',
              element: <Dashboard />,
            },
            {
              path: 'dynamic-content',
              id: 'DynamicContent',
              element: <DynamicContent />,
            },
            {
              path: 'image-load',
              id: 'ImageLoad',
              element: <ImageLoad />,
            },
            {
              path: 'large-dom',
              id: 'LargeDOM',
              element: <LargeDOM />,
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
        {
          path: '/info',
          id: 'Info',
          element: <Info />,
        },
        {
          path: '*',
          id: 'NotFound',
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
