import React from 'react';

import { useStore } from '../../store/store';

const Ratings = () => {
  const { state } = useStore();

  return (
    <div className="min-h-[80vh] container mx-auto">
      {JSON.stringify(state)}
      {state?.guest?.guest_session_id.rated_movies?.results?.length > 0 ? (
        <>
          <h1 className="text-3xl">Your Ratings</h1>

          {state?.guest?.guest_session_id.rated_movies.results.map((el) => (
            <>{JSON.stringify(el)}</>
          ))}
        </>
      ) : (
        <h1 className="text-3xl">No rated movies</h1>
      )}
    </div>
  );
};

export default Ratings;
