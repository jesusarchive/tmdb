import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { Card } from './card.stories';

describe('<Card />', () => {
  test('Card mounts properly', () => {
    const wrapper = render(<Card />);
    expect(wrapper).toBeTruthy();
  });
});
