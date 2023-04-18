import React, { useEffect, useState } from 'react';

import { getMoviesBySearch, getPopularMovies, IMAGE_BASE_URL, MovieType } from './api';

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(-1);
  const [currentSearchValue, setCurrentSearchValue] = useState('');
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([] as Array<MovieType>);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = search ? await getMoviesBySearch(page, search) : await getPopularMovies(page);
      console.log(data);
      setMaxPage(data.total_pages);
      setMovies(data.results);
      setLoading(false);
    })();
  }, [page, search]);

  const handleSearchInputChange = (value: string) => {
    setCurrentSearchValue(value);
  };

  const handleSearchClick = () => {
    setSearch(currentSearchValue);
  };

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
          <div className="form-control p-10 self-center">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
                onChange={(e) => handleSearchInputChange(e.target.value)}
              />
              <button className="btn btn-square" onClick={handleSearchClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <h2 className="text-5xl font-bold pb-10">{search ? 'Movies' : 'Popular movies'}</h2>

          {loading ? (
            <div className="h-full w-full flex">
              <span>loading...</span>
            </div>
          ) : (
            <div className="h-full w-full space-y-4">
              {movies.map((movie) => (
                <div className="w-full flex space-x-4" key={movie.id}>
                  <img className="w-20" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="poster" />
                  <div className="w-full flex flex-col">
                    <span className="h-12 w-full flex text-3xl font-bold cursor-pointer hover:text-purple-500">
                      {movie.title}
                    </span>
                    <span>{movie.release_date}</span>
                    <span className="text-2xl font-bold text-blue-200">{movie.vote_average}</span>
                  </div>
                </div>
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
