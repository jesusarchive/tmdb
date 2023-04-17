import React, { useEffect, useState } from 'react';

import { IMAGE_BASE_URL } from '../movies/api';
import { getMovie, getMovieVideos, MovieDetailType, MovieVideosType } from './api';

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({} as MovieDetailType);
  const [videos, setVideos] = useState([] as Array<MovieVideosType>);

  useEffect(() => {
    (async () => {
      setLoading(true);
      // ! MOCK
      const MOCK_ID = 671;
      const movieDetailData = await getMovie(MOCK_ID);
      console.log(movieDetailData);
      setMovie(movieDetailData);
      const movieVideosData = await getMovieVideos(MOCK_ID);
      setVideos(movieVideosData.results);
      console.log(movieVideosData.results);
      setLoading(false);
    })();
  }, []);

  const toHoursAndMinutes = (totalMinutes: number): string => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
  };

  const getTrailer = () => videos.find(({ type, name }) => type === 'Trailer' && name === 'Trailer');

  return (
    <div className="h-screen w-full flex p-5">
      {loading ? (
        'loading...'
      ) : (
        <div className="w-full h-full flex flex-col" key={movie.id}>
          <div className="w-full flex justify-around pb-5">
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
                <span>TMDb RATING</span>
                <span className="text-3xl font-bold text-blue-200">{movie.vote_average}</span>
              </div>
              <div className="w-2/6 flex flex-col">
                <span>YOUR RATING</span>
                <span className="text-3xl font-bold text-blue-200">{movie.vote_average}</span>
              </div>
              <div className="w-2/6 flex flex-col">
                <span>POPULARITY</span>
                <span className="text-3xl font-bold text-blue-200">{movie.vote_average}</span>
              </div>
            </div>
          </div>
          <div className="w-full flex space-x-2">
            <img className="w-72" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="poster" />
            <iframe
              className="w-3/6"
              src={`https://www.youtube.com/embed/${getTrailer()?.key}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="flex flex-col space-y-2">
              <div className="w-40 h-40 border-1 bg-gray-700 flex cursor-pointer">25 VIDEOS</div>
              <div className="w-40 h-40 border-1 bg-gray-700 flex cursor-pointer">99+ PHOTOS</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
