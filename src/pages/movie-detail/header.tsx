/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { FireIcon, StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { MovieDetailType } from '../../services/movie';
import { toHoursAndMinutes } from './utils';

type HeaderProps = {
  movie: MovieDetailType;
  rating: number;
  onRateClick: (...args: any) => any;
};

const Header: React.FC<HeaderProps> = ({ movie, rating, onRateClick }) => {
  const year = new Date(movie.release_date).getFullYear();
  const duration = toHoursAndMinutes(movie.runtime);

  return (
    <div className="w-full flex justify-between">
      <div className="w-4/6 flex flex-col">
        <span className="h-12 w-full flex text-3xl">{movie.title}</span>
        <div className="flex space-x-4">
          <span>{year}</span>
          <span>|</span>
          <span>{duration}</span>
        </div>
      </div>
      <div className="w-2/6 flex space-x-4">
        <div className="w-2/6 flex flex-col">
          <span className="font-bold">TMDb RATING</span>
          {/* RATING */}
          <div className="flex space-x-2">
            <StarIcon className="h-8 w-8 text-yellow-600" />
            <span className="text-2xl font-bold">{movie.vote_average?.toFixed(1)}</span>
          </div>
        </div>
        <div className="w-2/6 flex flex-col">
          <span className="font-bold">YOUR RATING</span>
          {/* USER RATING */}
          <div className="flex space-x-2  font-bold cursor-pointer" onClick={onRateClick}>
            {rating !== null ? (
              <>
                <StarIcon className="h-8 w-8 text-blue-600" />
                <span className="text-2xl">{rating}</span>
              </>
            ) : (
              <>
                <StarOutlineIcon className="h-8 w-8 text-blue-600" />
                <span className="text-2xl text-blue-600">Rate</span>
              </>
            )}
          </div>
        </div>
        {/* POPULARITY */}
        <div className="w-2/6 flex flex-col">
          <span className="font-bold">POPULARITY</span>
          <div className="flex space-x-2 font-bold">
            <FireIcon className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold">{movie.popularity?.toFixed()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
