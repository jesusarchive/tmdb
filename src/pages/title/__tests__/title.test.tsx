import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import Title from '../title';

describe('<Title />', () => {
  test('Title mounts properly', () => {
    const wrapper = render(<Title />);
    expect(wrapper).toBeTruthy();
  });
});
