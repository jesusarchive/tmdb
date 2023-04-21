import React from 'react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../helpers/testing';
import RATED_MOVIES_MOCK from '../__mocks__/rated-movies.json';
import Lister from '../lister';
import Ratings from '../ratings';

describe('<Ratings />', () => {
  test('Ratings mounts properly', () => {
    const wrapper = renderWithRouter(<Ratings />);
    expect(wrapper).toBeTruthy();
  });
});

describe('<Lister />', () => {
  test('Lister mounts properly', () => {
    const wrapper = renderWithRouter(<Lister titles={RATED_MOVIES_MOCK} />);
    expect(wrapper).toBeTruthy();
  });
});
