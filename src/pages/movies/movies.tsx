import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon, StarIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';

import { Button, Pagination, Table } from '../../components';
import { getMoviesBySearch, getPopularMovies, IMAGE_BASE_URL, MovieType } from './api';

const Movies = () => {
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
      <div className="container mx-auto flex flex-col justify-around">
        <div className="h-full w-full flex flex-col justify-around">
          {/* SEARCH */}
          <div className="form-control p-10 self-center">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
                onChange={(e) => handleSearchInputChange(e.target.value)}
              />
              <Button className="btn btn-square" onClick={handleSearchClick}>
                <MagnifyingGlassIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="pb-5">
            <h3>TMDb Charts</h3>
            {/* CHART TITLE */}
            <h1 className="text-3xl">{search ? 'Movies' : 'Most Popular movies'}</h1>
            {/* DESCRIPTION */}
            <p>As determined by TMDb Users</p>
          </div>

          {loading ? (
            <div className="h-full w-full flex">
              <span>loading...</span>
            </div>
          ) : (
            <Table className="w-full">
              <Table.Head>
                <span />
                <span>Title</span>
                <span>TMDb Rating</span>
                <span>Your Rating</span>
                <span />
              </Table.Head>

              <Table.Body className="overflow-scroll">
                {movies.map((movie) => (
                  <Table.Row key={movie.id}>
                    {/* POSTER */}
                    <div>
                      <img className="w-14" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="poster" />
                    </div>
                    {/* TITLE */}
                    <div className="space-x-2">
                      <a className="link">{movie.title}</a>
                      <span>{`(${new Date(movie.release_date).getFullYear()})`}</span>
                    </div>
                    {/* RATING */}
                    <div className="flex space-x-1">
                      <StarIcon className="h-6 w-6 text-yellow-600" />
                      <span className="font-bold">{movie.vote_average.toFixed(1)}</span>
                    </div>
                    {/* USER RATING */}
                    <div className="flex space-x-1">
                      <StarIconOutline className="h-6 w-6" />
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
          )}
        </div>

        {/* PAGINATION */}
        <Pagination className="self-center">
          <Button className="btn" onClick={handlePreviousPaginationClick}>
            «
          </Button>
          <Button className="btn">1</Button>
          <Button className="btn">2</Button>
          <Button className="btn">3</Button>
          <Button className="btn">4</Button>
          <Button className="btn" onClick={handleNextPaginationClick}>
            »
          </Button>
        </Pagination>
      </div>
    </div>
  );
};

export default Movies;