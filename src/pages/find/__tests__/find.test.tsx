// eslint-disable-next-line import/named
import React from 'react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../helpers/testing';
import Find from '../find';

describe('<Find />', () => {
  test('Find mounts properly', () => {
    const wrapper = renderWithRouter(<Find />);
    expect(wrapper).toBeTruthy();
  });
});
