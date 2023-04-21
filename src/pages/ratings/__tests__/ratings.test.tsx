import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { StateType, Store } from '../../../store/store';
import RATED_MOVIES_MOCK from '../__mocks__/rated-movies.json';
import Ratings from '../ratings';

describe('<Ratings />', () => {
  test('Ratings mounts properly', () => {
    const wrapper = render(<Ratings />);
    expect(wrapper).toBeTruthy();
  });

  test('with data', () => {
    const mockState = {
      guest: { success: true, guest_session_id: '1', expires_at: 'test', rated_movies: RATED_MOVIES_MOCK },
      theme: 'dark'
    } as StateType;

    const wrapper = render(
      <Store.Provider value={mockState}>
        <Ratings />
      </Store.Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
