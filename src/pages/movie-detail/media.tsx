import { PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { IMAGE_BASE_URL } from '../../config/api';
import { MovieDetailType, MovieVideoType } from '../../services/movie';
import { YOUTUBE_EMBED_URL } from './constants';

type MediaProps = {
  movie: MovieDetailType;
  trailer: MovieVideoType | undefined;
};

const Media: React.FC<MediaProps> = ({ movie, trailer }) => {
  return (
    <div className="w-full flex justify-around space-x-2">
      <div className="w-3/12">
        {movie.poster_path && <img className="w-full" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="poster" />}
      </div>
      <iframe
        className="w-7/12"
        src={`${YOUTUBE_EMBED_URL}/${trailer?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="w-2/12 h-full flex flex-col space-y-1 justify-around">
        <div className="h-full border-1 bg-base-200 flex flex-col items-center justify-center space-y-4 cursor-not-allowed">
          <VideoCameraIcon className="h-10 w-10"></VideoCameraIcon>
          <span className="font-bold">25 VIDEOS</span>
        </div>
        <div className="h-full border-1 bg-base-200 flex flex-col items-center justify-center space-y-4 cursor-not-allowed">
          <PhotoIcon className="h-10 w-10"></PhotoIcon>
          <span className="font-bold">99+ PHOTOS</span>
        </div>
      </div>
    </div>
  );
};

export default Media;
