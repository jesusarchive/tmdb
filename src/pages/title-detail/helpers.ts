import { CastType, CrewType, MovieDetailType, MovieVideoType, MovieWithRatingType } from '../../services/movie';
import { StateType } from '../../store/store';

export const filterTrailerFromVideos = (videos: Array<MovieVideoType>): MovieVideoType | undefined => {
  return videos.find(
    ({ type, name }) => type === 'Trailer' && (name === 'Trailer' || name.toLowerCase().includes('trailer'))
  );
};

export const filterDirectorFromCrew = (crew: Array<CrewType>): Array<CrewType> => {
  return crew.filter(({ job }) => job.toLowerCase() === 'director') || ([] as Array<CrewType>);
};

export const filterWritersFromCrew = (crew: Array<CrewType>): Array<CrewType> => {
  return crew.filter(({ department }) => department.toLowerCase() === 'writing') || ([] as Array<CrewType>);
};

export const filterStarsFromCast = (cast: Array<CastType>): Array<CastType> => {
  return cast.slice(0, 3);
};

export const getMovieRatingFromUserState = (state: StateType, movie: MovieDetailType) =>
  state?.guest && state?.guest?.rated_movies?.results?.find((el: MovieWithRatingType) => el.id === movie?.id)?.rating;
