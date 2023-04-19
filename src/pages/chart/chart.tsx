import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Pagination, Table } from '../../components';
import { IMAGE_BASE_URL } from '../../services/helpers/constants';
import { getPopularMovies, MovieType } from '../../services/movie';

const Chart = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(-1);
  const [movies, setMovies] = useState([] as Array<MovieType>);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getPopularMovies(page);
      console.log(data);
      setMaxPage(data.total_pages);
      setMovies(data.results);
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
      <div className="container mx-auto flex flex-col justify-around">
        <div className="h-full w-full flex flex-col justify-around">
          <div className="pb-5">
            <h3>TMDb Charts</h3>
            {/* CHART TITLE */}
            <h1 className="text-3xl">Most Popular movies</h1>
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

              <Table.Body>
                {movies?.map((movie) => (
                  <Table.Row key={movie.id}>
                    {/* POSTER */}
                    <div>
                      <Link to={`/title/${movie.id}`}>
                        <img className="w-14" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="poster" />
                      </Link>
                    </div>
                    {/* TITLE */}
                    <div className="space-x-2">
                      <Link className="link-info" to={`/title/${movie.id}`}>
                        {movie.title}
                      </Link>
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

export default Chart;
