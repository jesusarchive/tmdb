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

const MOVIES_API_URL = `${BASE_URL}/3/movie`;

export const getPopularMovies = async (page = 1): Promise<MoviesDataType | null> => {
  const url = `${MOVIES_API_URL}/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

  return await makeRequest(url);
};

export const getMoviesBySearch = async (page = 1, search = ''): Promise<MoviesDataType | null> => {
  const url = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${search}&include_adult=false`;

  return await makeRequest(url);
};

export const getMovie = async (id: number): Promise<MovieDetailType | null> => {
  const url = `${MOVIES_API_URL}/${id}?api_key=${API_KEY}&language=en-US`;

  return await makeRequest(url);
};

export const getMovieVideos = async (id: number): Promise<MovieVideosType | null> => {
  const url = `${MOVIES_API_URL}/${id}/videos?api_key=${API_KEY}&language=en-US`;

  return await makeRequest(url);
};

export const getMovieCredits = async (id: number): Promise<MovieCreditsType | null> => {
  const url = `${MOVIES_API_URL}/${id}/credits?api_key=${API_KEY}&language=en-US`;

  return await makeRequest(url);
};

export const postMovieRating = async (
  id: number,
  guestSessionId: string,
  payload: { value: number }
): Promise<PostMovieRatingType | null> => {
  const url = `${MOVIES_API_URL}/${id}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}`;
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  };

  return await makeRequest(url, config);
};

export const getGuestSessionRatedMovies = async (
  guestSessionId: string,
  page: number
): Promise<GuestSessionRatedMoviesType | null> => {
  const url = `${BASE_URL}/3/guest_session/${guestSessionId}/rated/movies?api_key=${API_KEY}&language=en-US&sort_by=created_at.asc&page=${page}`;

  return await makeRequest(url);
};
