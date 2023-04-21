import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { Input } from './input.stories';

describe('<Input />', () => {
  test('Input mounts properly', () => {
    const wrapper = render(<Input />);
    expect(wrapper).toBeTruthy();
  });
});
