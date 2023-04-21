import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { InputGroup } from './input-group.stories';

describe('<InputGroup />', () => {
  test('InputGroup mounts properly', () => {
    const wrapper = render(<InputGroup />);
    expect(wrapper).toBeTruthy();
  });
});
