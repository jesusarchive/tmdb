import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { ButtonGroup } from './button-group.stories';

describe('<ButtonGroup />', () => {
  test('ButtonGroup mounts properly', () => {
    const wrapper = render(<ButtonGroup />);
    expect(wrapper).toBeTruthy();
  });
});
