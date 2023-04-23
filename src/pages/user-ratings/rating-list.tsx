import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

import defaultPoster from '../../assets/default-poster.png';
import { Card } from '../../components';
import { IMAGE_BASE_URL } from '../../config';
import { RatedMovieType } from '../../services/movie';

export type RatingListProps = {
  titles: Array<RatedMovieType>;
};

const RatingList: React.FC<RatingListProps> = ({ titles }) => {
  return (
    <div className="space-y-4">
      <span className="p-2">{titles.length} titles</span>

      <div className="space-y-2">
        {titles.map((title: RatedMovieType) => {
          const poster = title.poster_path ? `${IMAGE_BASE_URL}${title.poster_path}` : defaultPoster;

          return (
            <div key={title.id}>
              <Card className="rounded-none p-3 pb-6 bg-base-200" side compact>
                <Card.Image className="w-40" src={poster} alt="poster" />
                <Card.Body className="w-full">
                  <Card.Title tag="h2">
                    <Link className="link" to={`/title/${title.id}`}>
                      {title.original_title}
                    </Link>
                    {title.release_date && <span>{`(${new Date(title.release_date).getFullYear()})`}</span>}
                  </Card.Title>
                  <div className="flex items-center space-x-1">
                    <StarIcon className="h-6 w-6 text-blue-600" />
                    <span className="text-lg">{title.rating}</span>
                  </div>
                  <p className="w-full">{title.overview}</p>
                  <span className="text-neutral-500">Votes: {title.vote_count}</span>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingList;
