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
          const { default: MovieDetail } = await import('./pages/movie-detail');

          return {
            Component: MovieDetail
          };
        }
      },
      {
        path: 'chart/popular',
        async lazy() {
          const { default: PopularMovies } = await import('./pages/popular-movies');

          return {
            Component: PopularMovies
          };
        }
      },
      {
        path: 'search',
        async lazy() {
          const { default: Search } = await import('./pages/search');

          return {
            Component: Search
          };
        }
      },
      {
        path: 'user/guest/ratings',
        async lazy() {
          const { default: UserRatings } = await import('./pages/user-ratings');

          return {
            Component: UserRatings
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
