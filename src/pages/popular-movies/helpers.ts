import { MovieType, RatedMovieType } from '../../services/movie';
import { StateType } from '../../store/store';

export const getMovieRatingFromUserState = (state: StateType, movie: MovieType) =>
  state?.guest && state?.guest?.rated_movies?.results?.find((el: RatedMovieType) => el.id === movie?.id)?.rating;
