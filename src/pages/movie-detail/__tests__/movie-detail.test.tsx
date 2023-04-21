import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import MovieDetail from '../movie-detail';

describe('<MovieDetail />', () => {
  test('MovieDetail mounts properly', () => {
    const wrapper = render(<MovieDetail />);
    expect(wrapper).toBeTruthy();
  });
});
