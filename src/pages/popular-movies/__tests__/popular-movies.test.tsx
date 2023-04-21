// eslint-disable-next-line import/named
import React from 'react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../helpers/testing';
import MOVIES_MOCK from '../__mocks__/movies.json';
import MovieTable from '../movie-table';
import PopularMovies from '../popular-movies';

describe('<PopularMovies />', () => {
  test('PopularMovies mounts properly', () => {
    const wrapper = renderWithRouter(<PopularMovies />);
    expect(wrapper).toBeTruthy();
  });
});

describe('<MovieTable />', () => {
  test('MovieTable mounts properly', () => {
    const wrapper = renderWithRouter(<MovieTable titles={MOVIES_MOCK} />);
    expect(wrapper).toBeTruthy();
  });
});
