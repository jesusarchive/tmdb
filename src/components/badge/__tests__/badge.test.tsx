import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { Badge, Colors, Empty, InAButton, InText, Outline, Sizes } from './badge.stories';

describe('<Badge />', () => {
  test('Badge mounts properly', () => {
    const wrapper = render(<Badge />);
    expect(wrapper).toBeTruthy();
  });

  test('Badge colors', () => {
    const wrapper = render(<Colors />);
    expect(wrapper).toBeTruthy();
  });

  test('Badge outline', () => {
    const wrapper = render(<Outline />);
    expect(wrapper).toBeTruthy();
  });

  test('Badge sizes', () => {
    const wrapper = render(<Sizes />);
    expect(wrapper).toBeTruthy();
  });

  test('Badge empty', () => {
    const wrapper = render(<Empty />);
    expect(wrapper).toBeTruthy();
  });

  test('Badge in text', () => {
    const wrapper = render(<InText />);
    expect(wrapper).toBeTruthy();
  });

  test('Badge in a button', () => {
    const wrapper = render(<InAButton />);
    expect(wrapper).toBeTruthy();
  });
});
