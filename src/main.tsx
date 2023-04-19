import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layouts/layout';
import Chart from './pages/chart';
import Find from './pages/find/find';
import Home from './pages/home';
import NoMatch from './pages/no-match';
import Title from './pages/title';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        async lazy() {
          const { loader, default: About } = await import('./pages/about');

          return {
            loader,
            Component: About
          };
        }
      },
      { path: 'title/:id', element: <Title /> },
      { path: 'chart/popular', element: <Chart /> },
      { path: 'find', element: <Find /> },
      {
        path: '*',
        element: <NoMatch />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  </React.StrictMode>
);
