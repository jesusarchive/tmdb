import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import Ratings from '../ratings';

describe('<Ratings />', () => {
  test('Ratings mounts properly', () => {
    const wrapper = render(<Ratings />);
    expect(wrapper).toBeTruthy();
  });
});
