// eslint-disable-next-line import/named
import { screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../helpers/testing';
import NoMatch from '../no-match';

describe('<NoMatch />', () => {
  test('NoMatch mounts properly', () => {
    const wrapper = renderWithRouter(<NoMatch />);
    expect(wrapper).toBeTruthy();

    const text = screen.getByText(/Nothing to see here!/i);
    expect(text.textContent).toBeTruthy();
  });
});
