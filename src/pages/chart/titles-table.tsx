import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

import { Table } from '../../components';
import { IMAGE_BASE_URL } from '../../services/constants';
import { MovieType } from '../../services/movie';

export type TitlesTableProps = {
  movies: Array<MovieType>;
};

// Table of titles (movies, tv shows...)
const TitlesTable: React.FC<TitlesTableProps> = ({ movies }) => {
  return (
    <Table className="min-h-[65vh] w-full" compact>
      <Table.Head>
        <span />
        <span>Title</span>
        <span>TMDb Rating</span>
        <span>Your Rating</span>
        <span />
      </Table.Head>

      <Table.Body>
        {movies?.map((movie) => (
          <Table.Row key={movie.id}>
            {/* POSTER */}
            <div className="w-12">
              <Link to={`/title/${movie.id}`}>
                <img className="w-full" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="poster" />
              </Link>
            </div>
            {/* TITLE & YEAR */}
            <div className="space-x-2 text-lg">
              <Link className="link" to={`/title/${movie.id}`}>
                {movie.title}
              </Link>
              <span>{`(${new Date(movie.release_date).getFullYear()})`}</span>
            </div>
            {/* RATING */}
            <div className="flex space-x-1 text-lg">
              <StarIcon className="h-6 w-6 text-yellow-600" />
              <span className="font-bold">{movie.vote_average.toFixed(1)}</span>
            </div>
            {/* USER RATING */}
            <div className="flex space-x-1">
              <StarOutlineIcon className="h-6 w-6" />
            </div>
            {/* BOOKMARK */}
            <div>
              <svg
                className="cursor-pointer"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="miter"
              >
                <polygon points="20 22 12 16 4 22 4 2 20 2 20 22"></polygon>
                <line x1="12" y1="6" x2="12" y2="12"></line>
                <line x1="15" y1="9" x2="9" y2="9"></line>
              </svg>
            </div>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default TitlesTable;
