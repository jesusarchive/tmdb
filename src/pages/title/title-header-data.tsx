import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { FireIcon, StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { MovieDetailType } from '../../services/movie';
import { toHoursAndMinutes } from './utils';

export type TitleHeaderDataProps = {
  movie: MovieDetailType;
  onRateClick: (...args: any) => any;
};

// Data showed in the header of title (movies, tv shows...) detail view
const TitleHeaderData: React.FC<TitleHeaderDataProps> = ({ movie, onRateClick }) => {
  return (
    <div className="w-full flex justify-between">
      <div className="w-4/6 flex flex-col">
        <span className="h-12 w-full flex text-3xl">{movie.title}</span>
        <div className="flex space-x-4">
          <span>{new Date(movie.release_date).getFullYear()}</span>
          <span>|</span>
          <span>{toHoursAndMinutes(movie.runtime)}</span>
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
          <div className="flex space-x-2 text-blue-600 font-bold cursor-pointer" onClick={onRateClick}>
            <StarIconOutline className="h-8 w-8" />
            <span className="text-2xl">Rate</span>
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

export default TitleHeaderData;
