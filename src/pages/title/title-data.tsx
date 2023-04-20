import React from 'react';

import { Badge } from '../../components';
import { CastType, CrewType, MovieDetailType } from '../../services/movie';

export type TitleDataProps = {
  movie: MovieDetailType;
  director: CrewType;
  writers: Array<CrewType>;
  stars: Array<CastType>;
};

// Data showed in the header of title (movies, tv shows...) detail view
const TitleData: React.FC<TitleDataProps> = ({ movie, director, writers, stars }) => {
  return (
    <div className="w-full space-y-2">
      {/* GENRES */}
      <div className="flex space-x-2">
        {movie.genres?.map(({ id, name }) => (
          <Badge key={id} className="text-lg p-4" size="md">
            {name}
          </Badge>
        ))}
      </div>
      {/* DESCRIPTION */}
      <div className="pt-4 pb-4">
        <p className="text-lg text-neutral-500">{movie.overview}</p>
      </div>
      <div className="divider"></div>
      {/* DIRECTOR */}
      <div className="w-full flex items-center space-x-2 text-lg">
        <span className="font-bold">Director</span>
        <a className="link" href={`https://www.google.com/search?q=${director.name}`} rel="noreferrer" target="_blank">
          {director.name}
        </a>
      </div>
      <div className="divider"></div>
      {/* WRITERS */}
      <div className="w-full flex items-center space-x-2 text-lg">
        <span className="font-bold">Writers</span>
        {writers?.map((writer, i) => (
          <div key={writer.credit_id} className="space-x-2">
            <a
              className="link"
              href={`https://www.google.com/search?q=${writer.name}`}
              rel="noreferrer"
              target="_blank"
            >
              {writer.name}
            </a>
            {i !== writers.length - 1 && <span>|</span>}
          </div>
        ))}
      </div>
      <div className="divider"></div>
      {/* STARS */}
      <div className="w-full flex items-center space-x-2 text-lg">
        <span className="text-xl font-bold">Stars</span>
        <div className="w-full flex space-x-2">
          {stars.map((star, i) => (
            <div key={star.id} className="space-x-2">
              <a
                className="link"
                href={`https://www.google.com/search?q=${star.name}`}
                rel="noreferrer"
                target="_blank"
              >
                {star.name}
              </a>
              {i !== stars.length - 1 && <span>|</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default TitleData;
