export const API_KEY = '';
export const BASE_URL = 'https://api.themoviedb.org';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MoviesDataType = {
  page: number;
  results: Array<MovieType>;
  total_pages: number;
  total_results: number;
};

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
