import React from 'react';

import movies from './movies-mock.json';

const MoviesPage = () => {
  return (
    <div className="h-full w-full flex flex-col p-5">
      {movies.map((movie) => (
        <span
          className="w-full flex text-3xl font-bold underline cursor-pointer hover:text-purple-500"
          key={movie.title}
        >
          {movie.title}
        </span>
      ))}
    </div>
  );
};

export default MoviesPage;
