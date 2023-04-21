// eslint-disable-next-line import/named
import React from 'react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../helpers/testing';
import MOVIES_MOCK from '../__mocks__/movies.json';
import Find from '../find';
import TitleList from '../title-list';

describe('<Find />', () => {
  test('Find mounts properly', () => {
    const wrapper = renderWithRouter(<Find />);
    expect(wrapper).toBeTruthy();
  });
});

describe('<TitleList />', () => {
  test('TitleList mounts properly', () => {
    const wrapper = renderWithRouter(<TitleList titles={MOVIES_MOCK} />);
    expect(wrapper).toBeTruthy();
  });
});
