import { createBrowserRouter } from 'react-router-dom';

import { Caching, Rendering } from './Data';
import { Home } from './Home';
import { Layout } from './Layout';
import { NotFound } from './NotFound';
import {
    Animations, Dashboard, DynamicContent, ImageLoad, InfiniteScroll, InteractiveMedia, LargeDOM,
    PerformanceLayout, Search, WebSockets
} from './Performance';
import { Resources } from './Resources';
import { Indexing, Ranking } from './SEO';
import { DynamicLoading, Interaction } from './UX';

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
            path: 'dashboard',
            id: 'Dashboard',
            element: <Dashboard />,
          },
          {
            path: 'web-sockets',
            id: 'WebSockets',
            element: <WebSockets />,
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
            path: 'interactive-media',
            id: 'InteractiveMedia',
            element: <InteractiveMedia />,
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
      {
        path: '*',
        id: 'NotFound',
        element: <NotFound />,
      },
    ],
  },
]);
