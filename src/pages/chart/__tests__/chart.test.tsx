// eslint-disable-next-line import/named
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import Chart from '../chart';

describe('<Chart />', () => {
  test('Chart mounts properly', () => {
    const wrapper = render(<Chart />);
    expect(wrapper).toBeTruthy();
  });
});
