import { MovieType, MovieWithRatingType } from '../../services/movie';
import { StateType } from '../../store/store';

export const getMovieRatingFromUserState = (state: StateType, movie: MovieType) =>
  state?.guest && state?.guest?.rated_movies?.results?.find((el: MovieWithRatingType) => el.id === movie?.id)?.rating;
