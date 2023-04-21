import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { Divider, Vertical } from './divider.stories';

describe('<Divider />', () => {
  test('Divider mounts properly', () => {
    const wrapper = render(<Divider />);
    expect(wrapper).toBeTruthy();
  });

  test('Divider vertical', () => {
    const wrapper = render(<Vertical />);
    expect(wrapper).toBeTruthy();
  });
});
