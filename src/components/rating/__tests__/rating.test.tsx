import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { Rating } from './rating.stories';

describe('<Rating />', () => {
  test('Rating mounts properly', () => {
    const wrapper = render(<Rating />);
    expect(wrapper).toBeTruthy();
  });
});
