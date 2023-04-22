import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import MOVIE_CREDITS from '../__mocks__/movie-credits-mock.json';
import MOVIE_DETAIL_MOCK from '../__mocks__/movie-detail-mock.json';
import MOVIE_TRAILER from '../__mocks__/movie-video-mock.json';
import Genres from '../genres';
import Media from '../media';
import MovieDetail from '../movie-detail';
import Presentation from '../presentation';
import Plot from '../plot';

describe('<MovieDetail />', () => {
  test('MovieDetail mounts properly', () => {
    const wrapper = render(<MovieDetail />);
    expect(wrapper).toBeTruthy();
  });
});

describe('<Genres />', () => {
  test('Genres mounts properly', () => {
    const wrapper = render(<Genres genres={MOVIE_DETAIL_MOCK.genres} />);
    expect(wrapper).toBeTruthy();
  });
});

describe('<Media />', () => {
  test('Media mounts properly', () => {
    const wrapper = render(<Media movie={MOVIE_DETAIL_MOCK} trailer={MOVIE_TRAILER} />);
    expect(wrapper).toBeTruthy();
  });
});

describe('<Plot />', () => {
  test('Plot mounts properly', () => {
    const wrapper = render(
      <Plot plot="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium assumenda saepe illo exercitationem voluptatum, doloremque ipsum, eveniet commodi animi ratione suscipit molestias illum cum recusandae dignissimos autem nobis dolorem neque." />
    );
    expect(wrapper).toBeTruthy();
  });
});

describe('<Presentation />', () => {
  test('Presentation mounts properly', () => {
    const presentationData = {
      directors: MOVIE_CREDITS.crew.slice(0, 1) as any,
      writers: MOVIE_CREDITS.crew.slice(0, 2) as any,
      stars: MOVIE_CREDITS.cast.slice(0, 3) as any
    };
    const wrapper = render(<Presentation data={presentationData} />);
    expect(wrapper).toBeTruthy();
  });
});
