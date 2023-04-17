import React, { useEffect, useState } from 'react';

import { getMovies, MovieType } from './api';

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(-1);
  const [popularMovies, setPopularMovies] = useState([] as Array<MovieType>);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getMovies(page);
      console.log(data);
      setMaxPage(data.total_pages);
      setPopularMovies(data.results);
      setLoading(false);
    })();
  }, [page]);

  const handlePreviousPaginationClick = () => {
    const newPage = page - 1;
    if (newPage > 0) {
      setPage(newPage);
    }
  };

  const handleNextPaginationClick = () => {
    if (maxPage < 0) {
      return;
    }

    const newPage = page + 1;
    if (newPage <= maxPage) {
      setPage(newPage);
    }
  };

  return (
    <div className="h-full w-full flex p-5">
      <div className="h-full w-full flex flex-col justify-around">
        <div className="h-full w-full flex flex-col justify-around">
          <h2 className="text-5xl font-bold pb-10">Popular movies</h2>

          {loading ? (
            <div className="h-full w-full flex">
              <span>loading...</span>
            </div>
          ) : (
            <div className="h-full w-full">
              {popularMovies.map((movie: { title: string }) => (
                <span
                  className="h-12 w-full flex text-3xl font-bold underline cursor-pointer hover:text-purple-500"
                  key={movie.title}
                >
                  {movie.title}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="btn-group pt-12 self-center">
          <button className="btn" onClick={handlePreviousPaginationClick}>
            «
          </button>
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn">4</button>
          <button className="btn" onClick={handleNextPaginationClick}>
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
