import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { Modal } from './modal.stories';

describe('<Modal />', () => {
  test('Modal mounts properly', () => {
    const wrapper = render(<Modal />);
    expect(wrapper).toBeTruthy();
  });
});
