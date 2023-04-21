import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { Table } from './table.stories';

describe('<Table />', () => {
  test('Table mounts properly', () => {
    const wrapper = render(<Table />);
    expect(wrapper).toBeTruthy();
  });
});
