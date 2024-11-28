import './index.scss';

import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';

import i18n from '../public/locales/i18n';
import { router } from './pages';

createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <RouterProvider router={router} />
  </I18nextProvider>
);
