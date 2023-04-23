import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layouts/layout';
import Home from './pages/home';
import NotFound from './pages/not-found';
import { StoreProvider } from './store';

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
        path: '*',
        element: <NotFound />
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
