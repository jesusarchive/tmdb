import React, { useEffect, useState } from 'react';

import { getAllGuestSessionRatedMovies } from '../../services/movie';
import { useStore } from '../../store';
import { updateGuestSessionRatedMovies } from '../../store/actions';
import Header from './header';
import RatingList from './rating-list';

const UserRatings = () => {
  const { state, dispatch } = useStore();
  const [loading, setLoading] = useState(false);

  const updateUserRatedMovies = async () => {
    if (state.guest) {
      const ratedMovies = await getAllGuestSessionRatedMovies(state?.guest?.guest_session_id);
      dispatch(updateGuestSessionRatedMovies(ratedMovies));
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
      ) : (
        <div>
          <Header />

          {state?.guest && state?.guest?.rated_movies?.length > 0 ? (
            <RatingList titles={state?.guest?.rated_movies} />
          ) : (
            <span>No results</span>
          )}
        </div>
      )}
    </div>
  );
};

export default UserRatings;
