import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';

import { Button, Modal, Rating } from '../../components';
import {
  CastType,
  CrewType,
  getGuestSessionRatedMovies,
  getMovie,
  getMovieCredits,
  getMovieVideos,
  MovieDetailType,
  MovieVideoType,
  postMovieRating
} from '../../services/movie';
import { updateGuestSessionRatedMovies } from '../../store/actions';
import { useStore } from '../../store/store';
import { MAX_RATING } from './constants';
import Genres from './genres';
import Header from './header';
import {
  filterDirectorFromCrew,
  filterStarsFromCast,
  filterTrailerFromVideos,
  filterWritersFromCrew,
  getMovieRatingFromUserState
} from './helpers';
import Media from './media';
import Plot from './plot';
import Presentation from './presentation';

const MovieDetail = () => {
  const params = useParams();
  const { state, dispatch } = useStore();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({} as MovieDetailType);
  const [videos, setVideos] = useState([] as Array<MovieVideoType>);
  const [directors, setDirector] = useState({} as Array<CrewType>);
  const [writers, setWriters] = useState([] as Array<CrewType>);
  const [stars, setStars] = useState([] as Array<CastType>);
  const [openRatingModal, setOpenRatingModal] = useState(false);
  const [rating, setRating] = useState(null as any);
  const [stateRating, setStateRating] = useState(null as any);

  const handleRateOpenClick = () => {
    const isGuestSessionActive = !!state?.guest?.guest_session_id;
    if (isGuestSessionActive) {
      setOpenRatingModal(true);
    }
  };

  const handleUserRateClick = async () => {
    await postMovieRating(movie.id, state.guest.guest_session_id, { value: rating });
    setStateRating(rating);
    setOpenRatingModal(false);
  };

  const updateUserRatedMovies = async () => {
    const isGuestSessionActive = !!state?.guest?.guest_session_id;
    if (isGuestSessionActive) {
      const guestSessionRatedMovies = await getGuestSessionRatedMovies(state.guest.guest_session_id);
      dispatch(updateGuestSessionRatedMovies(guestSessionRatedMovies));

      return guestSessionRatedMovies;
    }
  };

  const loadMovieData = async () => {
    const { id } = params;
    if (id) {
      const movieDetailData = await getMovie(Number(id));
      const movieVideosData = await getMovieVideos(Number(id));
      const movieCredits = await getMovieCredits(Number(id));
      console.log(movieCredits);
      setMovie(movieDetailData);
      setVideos(movieVideosData.results);
      setDirector(filterDirectorFromCrew(movieCredits.crew));
      setWriters(filterWritersFromCrew(movieCredits.crew));
      setStars(filterStarsFromCast(movieCredits.cast));
    }
  };

  const init = async () => {
    setLoading(true);
    await updateUserRatedMovies();
    await loadMovieData();
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      init();
    })();
  }, []);

  useEffect(() => {
    setLoading(true);
    const currentStateRating = getMovieRatingFromUserState(state, movie);
    setStateRating(currentStateRating);
    setRating(currentStateRating);
    setLoading(false);
  }, [state?.guest]);

  return (
    <div className="min-h-[80vh] w-full flex p-5">
      {loading ? (
        <span>loading...</span>
      ) : (
        Object.keys(movie).length > 0 && (
          <div className="container mx-auto flex flex-col space-y-5">
            {/* HEADER */}
            <Header movie={movie} rating={stateRating} onRateClick={handleRateOpenClick} />
            {/* MEDIA */}
            <Media movie={movie} trailer={filterTrailerFromVideos(videos)} />
            {/* DATA */}
            <div className="w-full space-y-2">
              <Genres genres={movie.genres} />
              <Plot plot={movie.overview} />
              <Presentation data={{ directors, writers, stars }} />
            </div>
            {/* RATING MODAL */}
            {openRatingModal &&
              createPortal(
                <Modal open={openRatingModal} onClickBackdrop={() => setOpenRatingModal(false)}>
                  <Modal.Header className="font-bold flex items-center justify-center mb-3">Rate this</Modal.Header>
                  <Modal.Body className="flex flex-col justify-center items-center">
                    <span className="pb-5 text-xl">{movie.original_title}</span>
                    <Rating value={rating || 0} onChange={setRating}>
                      {[...Array(MAX_RATING).keys()].map((_, index) => (
                        <Rating.Item key={`rating-${index}`} name="rating-1" className="mask mask-star" />
                      ))}
                    </Rating>
                  </Modal.Body>
                  <Modal.Actions className="flex items-center justify-center">
                    <Button onClick={handleUserRateClick}>Rate</Button>
                  </Modal.Actions>
                </Modal>,
                document.body
              )}
          </div>
        )
      )}
    </div>
  );
};

export default MovieDetail;
