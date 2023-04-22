import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import MOVIE_CREDITS_MOCK from '../__mocks__/movie-credits.json';
import MOVIE_DETAIL_MOCK from '../__mocks__/movie-detail.json';
import MOVIE_VIDEOS_MOCK from '../__mocks__/movie-videos.json';
import Genres from '../genres';
import Header from '../header';
import Media from '../media';
import MovieDetail from '../movie-detail';
import Plot from '../plot';
import Presentation from '../presentation';
import {
  filterDirectorsFromCrew,
  filterStarsFromCast,
  filterTrailerFromVideos,
  filterWritersFromCrew
} from '../helpers';
import { CastType, CrewType } from '../../../services/movie';

describe('<MovieDetail />', () => {
  test('MovieDetail mounts properly', () => {
    const wrapper = render(<MovieDetail />);
    expect(wrapper).toBeTruthy();
  });
});

describe('<Header />', () => {
  test('Header mounts properly', () => {
    const wrapper = render(<Header movie={MOVIE_DETAIL_MOCK} userRating={9} onRateClick={() => {}} />);
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
    const trailer = filterTrailerFromVideos(MOVIE_VIDEOS_MOCK.results);
    const wrapper = render(<Media movie={MOVIE_DETAIL_MOCK} trailer={trailer} />);
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
      directors: filterDirectorsFromCrew(MOVIE_CREDITS_MOCK.crew as Array<CrewType>),
      writers: filterWritersFromCrew(MOVIE_CREDITS_MOCK.crew as Array<CrewType>),
      stars: filterStarsFromCast(MOVIE_CREDITS_MOCK.cast as Array<CastType>)
    };
    const wrapper = render(<Presentation data={presentationData} />);
    expect(wrapper).toBeTruthy();
  });
});
