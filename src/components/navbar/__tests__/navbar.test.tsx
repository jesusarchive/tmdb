import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { Navbar } from './navbar.stories';

describe('<Navbar />', () => {
  test('Navbar mounts properly', () => {
    const wrapper = render(<Navbar />);
    expect(wrapper).toBeTruthy();
  });
});
