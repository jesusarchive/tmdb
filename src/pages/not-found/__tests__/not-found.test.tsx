// eslint-disable-next-line import/named
import { screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../helpers/testing';
import NotFound from '../not-found';

describe('<NotFound />', () => {
  test('NotFound mounts properly', () => {
    const wrapper = renderWithRouter(<NotFound />);
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/Nothing to see here!/i);
    expect(text.textContent).toBeTruthy();
  });
});
