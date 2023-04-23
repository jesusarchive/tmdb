import React, { useEffect, useState } from 'react';

import { getGuestSessionRatedMovies, RatedMovieType } from '../../services/movie';
import { useStore } from '../../store';
import { updateGuestSessionRatedMovies } from '../../store/actions';
import Header from './header';
import RatingList from './rating-list';

const UserRatings = () => {
  const { state, dispatch } = useStore();
  const [loading, setLoading] = useState(false);

  const updateUserRatedMovies = async () => {
    const isGuestSessionActive = !!state?.guest?.guest_session_id;
    if (isGuestSessionActive) {
      let ratedMovies = [];
      const data = await getGuestSessionRatedMovies(state.guest.guest_session_id, 1);
      ratedMovies = data.results;

      if (data.total_pages > 1) {
        const allPagesData = await Promise.all(
          [...Array(data.total_pages).keys()].map(async (_, index) =>
            index + 1 === 1 ? data : await getGuestSessionRatedMovies(state.guest.guest_session_id, index + 1)
          )
        );
        const mappedRatings = allPagesData.reduce((acc, el) => acc.concat(el.results), [] as Array<RatedMovieType>);
        ratedMovies = mappedRatings;
      }

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

          {state?.guest?.rated_movies?.length > 0 ? (
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
