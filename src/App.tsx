import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layouts/layout';
import Home from './pages/home';
import NoMatch from './pages/no-match';

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
      {
        path: '*',
        element: <NoMatch />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};

export default App;
