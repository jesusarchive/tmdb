import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import App from './App';

describe('<App />', () => {
  test('App mounts properly', () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

    // Get by element
    const div = wrapper.container.querySelector('div');
    expect(div?.textContent).toBe('APP');

    // Get by text using the React testing library
    const text = screen.getByText(/APP/i);
    expect(text.textContent).toBeTruthy();
  });
});
