// eslint-disable-next-line import/named
import React from 'react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../helpers/testing';
import MOCK_MOVIES from '../__mocks__/movies.json';
import Chart from '../chart';
import TitleTable from '../title-table';

describe('<Chart />', () => {
  test('Chart mounts properly', () => {
    const wrapper = renderWithRouter(<Chart />);
    expect(wrapper).toBeTruthy();
  });

  test('Chart title table', () => {
    const wrapper = renderWithRouter(<TitleTable titles={MOCK_MOVIES} />);
    expect(wrapper).toBeTruthy();
  });
});
