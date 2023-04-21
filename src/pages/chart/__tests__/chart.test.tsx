// eslint-disable-next-line import/named
import React from 'react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../helpers/testing';
import MOVIES_MOCK from '../__mocks__/movies.json';
import Chart from '../chart';
import TitleTable from '../title-table';

describe('<Chart />', () => {
  test('Chart mounts properly', () => {
    const wrapper = renderWithRouter(<Chart />);
    expect(wrapper).toBeTruthy();
  });

  test('Title table', () => {
    const wrapper = renderWithRouter(<TitleTable titles={MOVIES_MOCK} />);
    expect(wrapper).toBeTruthy();
  });
});
