import React, { useEffect, useState } from 'react';

import { getGuestSessionRatedMovies } from '../../services/movie';
import { updateGuestSessionRatedMovies } from '../../store/actions';
import { useStore } from '../../store/store';
import RatingList from './rating-list';

const UserRatings = () => {
  const { state, dispatch } = useStore();
  const [loading, setLoading] = useState(false);

  // TODO: Review if needed, check to trigger the update on rate click
  const updateUserRatedMovies = async () => {
    const isGuestSessionActive = !!state?.guest?.guest_session_id;
    if (isGuestSessionActive) {
      const guestSessionRatedMovies = await getGuestSessionRatedMovies(state.guest.guest_session_id);
      dispatch(updateGuestSessionRatedMovies(guestSessionRatedMovies));

      return guestSessionRatedMovies;
    }
  };

  const init = async () => {
    setLoading(true);
    await updateUserRatedMovies();
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      init();
    })();
  }, []);

  return (
    <div className="min-h-[80vh] container mx-auto">
      {loading ? (
        <span>loading...</span>
      ) : state?.guest?.rated_movies?.results?.length > 0 ? (
        <div className="">
          <h1 className="text-3xl pb-5">Your Ratings</h1>

          {state?.guest?.rated_movies.results ? (
            <RatingList titles={state?.guest?.rated_movies.results} />
          ) : (
            <span>No results</span>
          )}
        </div>
      ) : (
        <span className="">No rated movies</span>
      )}
    </div>
  );
};

export default UserRatings;
