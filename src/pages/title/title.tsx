import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Modal } from '../../components';
import {
  CastType,
  CrewType,
  getMovie,
  getMovieCredits,
  getMovieVideos,
  MovieDetailType,
  MovieVideoType
} from '../../services/movie';
import Rating from './rating';
import TitleData from './title-data';
import TitleHeaderData from './title-header-data';
import TitleMedia from './title-media';

/**
 *
 * View of title (movie, tv show...) detail data
 *
 */
const Title = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({} as MovieDetailType);
  const [videos, setVideos] = useState([] as Array<MovieVideoType>);
  const [director, setDirector] = useState({} as CrewType);
  const [writers, setWriters] = useState([] as Array<CrewType>);
  const [stars, setStars] = useState([] as Array<CastType>);
  const [openRatingModal, setOpenRatingModal] = useState(false);

  const handleRateClick = () => {
    setOpenRatingModal(true);
  };

  const getTrailer = () => {
    return videos.find(
      ({ type, name }) => type === 'Trailer' && (name === 'Trailer' || name.toLowerCase().includes('trailer'))
    );
  };

  const getDirector = (crew: Array<CrewType>): CrewType => {
    return crew.find(({ job }) => job.toLowerCase() === 'director') || ({} as CrewType);
  };

  const getWriters = (crew: Array<CrewType>): Array<CrewType> => {
    return crew.filter(({ department }) => department.toLowerCase() === 'writing') || ([] as Array<CrewType>);
  };

  const getStars = (cast: Array<CastType>): Array<CastType> => {
    return cast.slice(0, 3);
  };

  const handleMovieCreditsData = (movieCredits: { id: number; crew: Array<CrewType>; cast: Array<CastType> }) => {
    setDirector(getDirector(movieCredits.crew));
    setWriters(getWriters(movieCredits.crew));
    setStars(getStars(movieCredits.cast));
  };

  const init = async () => {
    setLoading(true);

    const { id } = params;

    if (id) {
      const movieDetailData = await getMovie(Number(id));
      setMovie(movieDetailData);

      const movieVideosData = await getMovieVideos(Number(id));
      setVideos(movieVideosData.results);

      const movieCredits = await getMovieCredits(Number(id));
      handleMovieCreditsData(movieCredits);
    }

    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      init();
    })();
  }, []);

  return (
    <div className="min-h-[80vh] w-full flex p-5">
      {loading ? (
        <span>loading...</span>
      ) : (
        Object.keys(movie).length > 0 && (
          <div className="container mx-auto flex flex-col space-y-5">
            {/* HEADER DATA */}
            <TitleHeaderData movie={movie} onRateClick={handleRateClick} />
            {/* MEDIA */}
            <TitleMedia movie={movie} trailer={getTrailer()} />
            {/* DATA */}
            <TitleData movie={movie} director={director} writers={writers} stars={stars} />
            {/* RATING MODAL */}
            <Modal open={openRatingModal} onClickBackdrop={() => setOpenRatingModal(false)}>
              <Modal.Header className="font-bold flex items-center justify-center mb-3">Rate this</Modal.Header>
              <Modal.Body className="flex flex-col justify-center items-center">
                <span className="pb-5 text-xl">{movie.original_title}</span>
                <Rating onChange={console.log} />
              </Modal.Body>
              <Modal.Actions className="flex items-center justify-center">
                <Button onClick={() => setOpenRatingModal(false)}>Rate</Button>
              </Modal.Actions>
            </Modal>
          </div>
        )
      )}
    </div>
  );
};

export default Title;
