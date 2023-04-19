export const API_KEY = '';
export const BASE_URL = 'https://api.themoviedb.org';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export type MovieDetailType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: Array<any>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<any>;
  production_countries: Array<any>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<any>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieVideoType = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
};

export type CastType = {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export type CrewType = {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
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
