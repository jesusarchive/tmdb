import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { Dropdown } from './dropdown.stories';

describe('<Dropdown />', () => {
  test('Dropdown mounts properly', () => {
    const wrapper = render(<Dropdown />);
    expect(wrapper).toBeTruthy();
  });
});
