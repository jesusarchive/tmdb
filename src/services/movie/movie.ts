import { API_KEY, BASE_URL } from '../constants';
import { CastType, CrewType, MovieDetailType, MoviesDataType, MovieVideoType, MovieWithRatingType } from './types';

// TODO: Add verbs api utils
// TODO: Review types
// GET
export const getPopularMovies = async (page = 1): Promise<MoviesDataType> => {
  const response = await fetch(`${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  const data = await response.json();

  return data;
};

export const getMoviesBySearch = async (page = 1, search = ''): Promise<MoviesDataType> => {
  const response = await fetch(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${search}&include_adult=false`
  );
  const data = await response.json();

  return data;
};

export const getMovie = async (id: number): Promise<MovieDetailType> => {
  const response = await fetch(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();

  return data;
};

export const getMovieVideos = async (id: number): Promise<{ id: number; results: Array<MovieVideoType> }> => {
  const response = await fetch(`${BASE_URL}/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();

  return data;
};

export const getMovieCredits = async (
  id: number
): Promise<{ id: number; cast: Array<CastType>; crew: Array<CrewType> }> => {
  const response = await fetch(`${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();

  return data;
};

export const getGuestSessionRatedMovies = async (
  guestSessionId: string
): Promise<{ results: Array<MovieWithRatingType> }> => {
  const response = await fetch(
    `${BASE_URL}/3/guest_session/${guestSessionId}/rated/movies?api_key=${API_KEY}&language=en-US&sort_by=created_at.asc`
  );
  const data = await response.json();

  return data;
};

// POST
export const postMovieRating = async (
  id: number,
  guest_session_id: number,
  payload: { value: number }
): Promise<{ page: number; results: Array<MovieWithRatingType>; total_pages: number; total_results: number }> => {
  const response = await fetch(
    `${BASE_URL}/3/movie/${id}/rating?api_key=${API_KEY}&guest_session_id=${guest_session_id}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }
  );
  const data = await response.json();

  return data;
};
