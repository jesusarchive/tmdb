import React from 'react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../helpers/testing';
import MOVIES_MOCK from '../__mocks__/movies.json';
import ResultList from '../result-list';
import Search from '../search';

describe('<Search />', () => {
  test('Search mounts properly', () => {
    const wrapper = renderWithRouter(<Search />);
    expect(wrapper).toBeTruthy();
  });
});

describe('<ResultList />', () => {
  test('ResultList mounts properly', () => {
    const wrapper = renderWithRouter(<ResultList titles={MOVIES_MOCK} />);
    expect(wrapper).toBeTruthy();
  });
});
