// eslint-disable-next-line import/named
import React from 'react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../helpers/testing';
import MOCK_MOVIES from '../__mocks__/movies.json';
import Find from '../find';
import TitleList from '../title-list';

describe('<Find />', () => {
  test('Find mounts properly', () => {
    const wrapper = renderWithRouter(<Find />);
    expect(wrapper).toBeTruthy();
  });

  test('Title list', () => {
    const wrapper = renderWithRouter(<TitleList titles={MOCK_MOVIES} />);
    expect(wrapper).toBeTruthy();
  });
});
