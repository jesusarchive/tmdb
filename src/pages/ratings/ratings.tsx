import React from 'react';

import { useStore } from '../../store/store';
import Lister from './lister';

const Ratings = () => {
  const { state } = useStore();

  return (
    <div className="min-h-[80vh] container mx-auto">
      {state?.guest?.rated_movies?.results?.length > 0 ? (
        <div className="">
          <h1 className="text-3xl pb-5">Your Ratings</h1>

          {state?.guest?.rated_movies.results ? (
            <Lister titles={state?.guest?.rated_movies.results} />
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

export default Ratings;
