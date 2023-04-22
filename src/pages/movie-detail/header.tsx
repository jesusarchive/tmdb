/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { FireIcon, StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { MovieDetailType } from '../../services/movie';
import { minutesToHHMM } from '../../utils';

type HeaderProps = {
  movie: MovieDetailType;
  userRating: number;
  onRateClick: (...args: any) => any;
};

const Header: React.FC<HeaderProps> = ({ movie, userRating, onRateClick }) => {
  return (
    <div className="w-full flex justify-between">
      <div className="w-4/6 flex flex-col">
        <span className="h-12 w-full flex text-3xl">{movie.title}</span>
        <div className="flex space-x-4">
          {movie.release_date && (
            <>
              <span>{new Date(movie.release_date).getFullYear()}</span>
              <span>|</span>
            </>
          )}
          <span>{minutesToHHMM(movie.runtime)}</span>
        </div>
      </div>

      <div className="w-2/6 flex space-x-4">
        <div className="w-2/6 flex flex-col">
          <span className="font-bold">TMDb RATING</span>
          <div className="flex space-x-2">
            <StarIcon className="h-8 w-8 text-yellow-600" />
            <span className="text-2xl font-bold">{movie.vote_average?.toFixed(1)}</span>
          </div>
        </div>

        <div className="w-2/6 flex flex-col">
          <span className="font-bold">YOUR RATING</span>
          <div className="flex space-x-2  font-bold cursor-pointer" onClick={onRateClick}>
            {userRating ? (
              <>
                <StarIcon className="h-8 w-8 text-blue-600" />
                <span className="text-2xl">{userRating}</span>
              </>
            ) : (
              <>
                <StarOutlineIcon className="h-8 w-8 text-blue-600" />
                <span className="text-2xl text-blue-600">Rate</span>
              </>
            )}
          </div>
        </div>

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
