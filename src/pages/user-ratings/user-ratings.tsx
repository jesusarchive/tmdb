import React from 'react';

import { useStore } from '../../store/store';
import RatingList from './rating-list';

const UserRatings = () => {
  const { state } = useStore();

  return (
    <div className="min-h-[80vh] container mx-auto">
      {state?.guest?.rated_movies?.results?.length > 0 ? (
        <div className="">
          <h1 className="text-3xl pb-5">Your Ratings</h1>

          {state?.guest?.rated_movies.results ? (
            <RatingList titles={state?.guest?.rated_movies.results} />
          ) : (
            <span>No results</span>
          )}
        </div>
      ) : (
        <span className="text-3xl">No rated movies</span>
      )}
    </div>
  );
};

export default UserRatings;
