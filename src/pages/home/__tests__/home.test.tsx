// eslint-disable-next-line import/named
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import Home from '../home';

describe('<Home />', () => {
  test('Home mounts properly', () => {
    const wrapper = render(<Home />);
    expect(wrapper).toBeTruthy();

    const h1 = wrapper.container.querySelector('h1');
    expect(h1?.textContent).toBe('TMDb');

    const text = screen.getByText(/TMDb/i);
    expect(text.textContent).toBeTruthy();
  });
});
