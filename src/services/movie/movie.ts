import { API_KEY, BASE_URL } from '../../config/api';
import { CastType, CrewType, MovieDetailType, MoviesDataType, MovieVideoType, MovieWithRatingType } from './types';

// Get popular movies
export const getPopularMovies = async (page = 1): Promise<MoviesDataType> => {
  const response = await fetch(`${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  const data = await response.json();

  return data;
};

// Get movies by search
export const getMoviesBySearch = async (page = 1, search = ''): Promise<MoviesDataType> => {
  const response = await fetch(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${search}&include_adult=false`
  );
  const data = await response.json();

  return data;
};

// Get movie detail data
export const getMovie = async (id: number): Promise<MovieDetailType> => {
  const response = await fetch(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();

  return data;
};

// Get movie videos
export const getMovieVideos = async (id: number): Promise<{ id: number; results: Array<MovieVideoType> }> => {
  const response = await fetch(`${BASE_URL}/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();

  return data;
};

// Get movie credits
export const getMovieCredits = async (
  id: number
): Promise<{ id: number; cast: Array<CastType>; crew: Array<CrewType> }> => {
  const response = await fetch(`${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();

  return data;
};

// Get guest user rated movie list
export const getGuestSessionRatedMovies = async (
  guestSessionId: string
): Promise<{ results: Array<MovieWithRatingType> }> => {
  const response = await fetch(
    `${BASE_URL}/3/guest_session/${guestSessionId}/rated/movies?api_key=${API_KEY}&language=en-US&sort_by=created_at.asc`
  );
  const data = await response.json();

  return data;
};

// Post movie rating
export const postMovieRating = async (
  id: number,
  guestSessionId: number,
  payload: { value: number }
): Promise<{ page: number; results: Array<MovieWithRatingType>; total_pages: number; total_results: number }> => {
  const response = await fetch(
    `${BASE_URL}/3/movie/${id}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }
  );
  const data = await response.json();

  return data;
};
