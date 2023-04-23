import React from 'react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../helpers/testing';
import MOVIES_MOCK from '../__mocks__/movies.json';
import Chart from '../chart';
import PopularMovies from '../popular-movies';

describe('<PopularMovies />', () => {
  test('PopularMovies mounts properly', () => {
    const wrapper = renderWithRouter(<PopularMovies />);
    expect(wrapper).toBeTruthy();
  });
});

describe('<Chart />', () => {
  test('Chart mounts properly', () => {
    const wrapper = renderWithRouter(<Chart titles={MOVIES_MOCK} />);
    expect(wrapper).toBeTruthy();
  });
});
