import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { FireIcon, PhotoIcon, StarIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';

import { Badge } from '../../components';
import { IMAGE_BASE_URL } from '../movies/api';
import { CastType, CrewType, getMovie, getMovieCredits, getMovieVideos, MovieDetailType, MovieVideoType } from './api';

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({} as MovieDetailType);
  const [videos, setVideos] = useState([] as Array<MovieVideoType>);
  const [cast, setCast] = useState([] as Array<CastType>);
  const [crew, setCrew] = useState([] as Array<CrewType>);
  const [director, setDirector] = useState({} as CrewType);
  const [writers, setWriters] = useState([] as Array<CrewType>);
  const [stars, setStars] = useState([] as Array<CastType>);

  const toHoursAndMinutes = (totalMinutes: number): string => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
  };

  const getTrailer = () => videos.find(({ type, name }) => type === 'Trailer' && name === 'Trailer');

  const getDirector = (): CrewType => crew.find(({ job }) => job.toLowerCase() === 'director') || ({} as CrewType);

  const getWriters = (): Array<CrewType> =>
    crew.filter(({ department }) => department.toLowerCase() === 'writing') || ([] as Array<CrewType>);

  const getStars = (): Array<CastType> => cast.slice(0, 3);

  const init = async () => {
    setLoading(true);

    // ! MOCK
    const MOCK_ID = 671;

    const movieDetailData = await getMovie(MOCK_ID);
    setMovie(movieDetailData);

    const movieVideosData = await getMovieVideos(MOCK_ID);
    setVideos(movieVideosData.results);

    const movieCredits = await getMovieCredits(MOCK_ID);
    setCast(movieCredits.cast);
    setCrew(movieCredits.crew);
    setDirector(getDirector());
    setWriters(getWriters());
    setStars(getStars());

    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      init();
    })();
  }, []);

  return (
    <div className="h-screen w-full flex p-5">
      {loading ? (
        'loading...'
      ) : (
        <div className="container mx-auto flex flex-col space-y-5" key={movie.id}>
          {/* HEADER DATA */}
          <div className="w-full flex justify-around">
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
                  <span className="text-2xl">{movie.vote_average?.toFixed(1)}</span>
                </div>
              </div>
              <div className="w-2/6 flex flex-col">
                <span className="font-bold">YOUR RATING</span>
                {/* USER RATING */}
                <div className="flex space-x-2 text-blue-600 font-bold">
                  <StarIconOutline className="h-8 w-8" />
                  <span className="text-2xl">Rate</span>
                </div>
              </div>
              <div className="w-2/6 flex flex-col">
                <span className="font-bold">POPULARITY</span>
                <div className="flex space-x-2 font-bold">
                  <FireIcon className="h-8 w-8 text-red-600" />
                  <span className="text-2xl font-bold">{movie.popularity?.toFixed()}</span>
                </div>
              </div>
            </div>
          </div>
          {/* MEDIA */}
          <div className="w-full h-2/6 flex justify-around space-x-2">
            <img className="w-1/6" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="poster" />
            <iframe
              className="w-4/6"
              src={`https://www.youtube.com/embed/${getTrailer()?.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="w-1/6 h-full flex flex-col space-y-2 justify-around">
              <div className="h-full border-1 bg-base-200 flex flex-col items-center justify-center space-y-4 cursor-pointer">
                <VideoCameraIcon className="h-10 w-10"></VideoCameraIcon>
                <span className="font-bold">25 VIDEOS</span>
              </div>
              <div className="h-full border-1 bg-base-200 flex flex-col items-center justify-center space-y-4 cursor-pointer">
                <PhotoIcon className="h-10 w-10"></PhotoIcon>
                <span className="font-bold">99+ PHOTOS</span>
              </div>
            </div>
          </div>
          {/* DATA */}
          <div className="w-full space-y-2">
            {/* GENRES */}
            <div className="flex space-x-2">
              {movie.genres?.map(({ id, name }) => (
                <Badge className="text-lg" key={id} size="lg">
                  {name}
                </Badge>
              ))}
            </div>
            {/* DESCRIPTION */}
            <div className="pt-4 pb-4">
              <p className="text-lg">{movie.overview}</p>
            </div>
            <div className="divider"></div>
            {/* DIRECTOR */}
            <div className="h-16 w-full flex items-center space-x-2 text-xl">
              <span className="font-bold">Director</span>
              <span className="text-primary">{director?.name}</span>
            </div>
            <div className="divider"></div>
            {/* WRITERS */}
            <div className="h-16 w-full flex items-center space-x-2 text-xl">
              <span className="font-bold">Writers</span>
              {writers?.map(({ id, name }, i) => (
                <>
                  <span className="text-primary" key={id}>
                    {name}
                  </span>
                  {i !== writers.length - 1 && <span>|</span>}
                </>
              ))}
            </div>
            <div className="divider"></div>
            {/* STARS */}
            <div className="h-16 w-full flex items-center space-x-2 text-xl">
              <span className="text-xl font-bold">Stars</span>
              <div className="space-x-2">
                {stars.map(({ id, name }, i) => (
                  <>
                    <span className="text-primary" key={id}>
                      {name}
                    </span>
                    {i !== stars.length - 1 && <span>|</span>}
                  </>
                ))}
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
