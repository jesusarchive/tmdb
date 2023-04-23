import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider } from '../store';

export const renderWithStore = (children: React.ReactElement) => {
  return {
    ...render(children, { wrapper: StoreProvider })
  };
};

export const renderWithRouter = (children: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(children, { wrapper: BrowserRouter })
  };
};
