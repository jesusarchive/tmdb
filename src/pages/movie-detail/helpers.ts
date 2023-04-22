import { CastType, CrewType, MovieDetailType, MovieVideoType, RatedMovieType } from '../../services/movie';
import { StateType } from '../../store/store';

export const filterTrailerFromVideos = (videos: Array<MovieVideoType>): MovieVideoType | undefined => {
  return videos.find(
    ({ type, name }) => type === 'Trailer' && (name === 'Trailer' || name.toLowerCase().includes('trailer'))
  );
};

export const filterDirectorsFromCrew = (crew: Array<CrewType>): Array<CrewType> => {
  return crew.filter(({ job }) => job.toLowerCase() === 'director');
};

export const filterWritersFromCrew = (crew: Array<CrewType>): Array<CrewType> => {
  return crew.filter(({ department }) => department.toLowerCase() === 'writing');
};

export const filterStarsFromCast = (cast: Array<CastType>): Array<CastType> => {
  return cast.slice(0, 3);
};

export const getMovieRatingFromUserState = (state: StateType, movie: MovieDetailType) =>
  state?.guest && state?.guest?.rated_movies?.find((el: RatedMovieType) => el.id === movie?.id)?.rating;
