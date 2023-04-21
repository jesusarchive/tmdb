import React from 'react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../helpers/testing';
import RATED_MOVIES_MOCK from '../__mocks__/rated-movies.json';
import RatingList from '../rating-list';
import UserRatings from '../user-ratings';

describe('<UserRatings />', () => {
  test('Ratings mounts properly', () => {
    const wrapper = renderWithRouter(<UserRatings />);
    expect(wrapper).toBeTruthy();
  });
});

describe('<RatingList />', () => {
  test('RatingList mounts properly', () => {
    const wrapper = renderWithRouter(<RatingList titles={RATED_MOVIES_MOCK} />);
    expect(wrapper).toBeTruthy();
  });
});
