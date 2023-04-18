import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layouts/layout';
import Home from './pages/home';
import Movie from './pages/movie';
import Movies from './pages/movies/movies';
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
      { path: 'movie', element: <Movie /> },
      { path: 'movies', element: <Movies /> },
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
