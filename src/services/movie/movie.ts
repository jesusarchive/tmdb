import { API_KEY, BASE_URL } from '../../config/api';
import { makeRequest } from '../../utils/make-request';
import {
  GuestSessionRatedMoviesType,
  MovieCreditsType,
  MovieDetailType,
  MoviesDataType,
  MovieVideosType,
  PostMovieRatingType
} from './types';

export const getPopularMovies = async (page = 1): Promise<MoviesDataType | null> => {
  const data = await makeRequest(`${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);

  return data;
};

export const getMoviesBySearch = async (page = 1, search = ''): Promise<MoviesDataType | null> => {
  const data = await makeRequest(
    `${BASE_URL}/3/sarch/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${search}&include_adult=false`
  );

  return data;
};

export const getMovie = async (id: number): Promise<MovieDetailType | null> => {
  const data = await makeRequest(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`);

  return data;
};

export const getMovieVideos = async (id: number): Promise<MovieVideosType | null> => {
  const data = await makeRequest(`${BASE_URL}/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);

  return data;
};

export const getMovieCredits = async (id: number): Promise<MovieCreditsType | null> => {
  const data = await makeRequest(`${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);

  return data;
};

export const getGuestSessionRatedMovies = async (
  guestSessionId: string,
  page: number
): Promise<GuestSessionRatedMoviesType | null> => {
  const data = await makeRequest(
    `${BASE_URL}/3/guest_session/${guestSessionId}/rated/movies?api_key=${API_KEY}&language=en-US&sort_by=created_at.asc&page=${page}`
  );

  return data;
};

export const postMovieRating = async (
  id: number,
  guestSessionId: string,
  payload: { value: number }
): Promise<PostMovieRatingType | null> => {
  const data = await makeRequest(
    `${BASE_URL}/3/movie/${id}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }
  );

  return data;
};
