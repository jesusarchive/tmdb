import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layouts/layout';
import Home from './pages/home';
import NoMatch from './pages/no-match';
import { StoreProvider } from './store/store';

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
        path: 'title/:id',
        async lazy() {
          const { default: Title } = await import('./pages/title');

          return {
            Component: Title
          };
        }
      },
      {
        path: 'chart/popular',
        async lazy() {
          const { default: Chart } = await import('./pages/chart');

          return {
            Component: Chart
          };
        }
      },
      {
        path: 'find',
        async lazy() {
          const { default: Find } = await import('./pages/find');

          return {
            Component: Find
          };
        }
      },
      {
        path: 'user/guest/ratings',
        async lazy() {
          const { default: Ratings } = await import('./pages/ratings');

          return {
            Component: Ratings
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
  return (
    <StoreProvider>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </StoreProvider>
  );
};

export default App;
