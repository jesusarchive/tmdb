import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { Navbar, WithTitleAndIcon } from './navbar.stories';

describe('<Navbar />', () => {
  test('Navbar mounts properly', () => {
    const wrapper = render(<Navbar />);
    expect(wrapper).toBeTruthy();
  });

  test('Navbar with title and icon', () => {
    const wrapper = render(<WithTitleAndIcon />);
    expect(wrapper).toBeTruthy();
  });
});
