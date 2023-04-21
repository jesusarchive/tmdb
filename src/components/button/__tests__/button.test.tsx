import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { AsHref, Button, Colors, Icons, Variants } from './button.stories';

describe('<Button />', () => {
  test('Button mounts properly', () => {
    const wrapper = render(<Button />);
    expect(wrapper).toBeTruthy();
  });

  test('Button as href', () => {
    const wrapper = render(<AsHref />);
    expect(wrapper).toBeTruthy();
  });

  test('Button colors', () => {
    const wrapper = render(<Colors />);
    expect(wrapper).toBeTruthy();
  });

  test('Button icons', () => {
    const wrapper = render(<Icons />);
    expect(wrapper).toBeTruthy();
  });

  test('Button variants', () => {
    const wrapper = render(<Variants />);
    expect(wrapper).toBeTruthy();
  });
});
