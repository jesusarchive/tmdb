import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Divider, Table } from '../../components';
import { IMAGE_BASE_URL } from '../../services/constants';
import { getPopularMovies, MovieType } from '../../services/movie';
import { uniq } from '../../utils';

/**
 *
 * View with a table showing TMDb charts
 *
 * Example charts:
 *   - Most Popular Movies
 *   - Top Rated Movies
 *
 */
const Chart = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([] as Array<MovieType>);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getPopularMovies(1);
      const firstPageMovies = data.results;
      console.log(data);
      // setMaxPage(data.total_pages);
      // setMovies(data.results);
      if (data.total_pages > 6) {
        const nextPagesData = await Promise.all([2, 3, 4, 5, 6].map(async (el) => await getPopularMovies(el)));
        const newMovies = nextPagesData.reduce((acc, el) => acc.concat(el.results), firstPageMovies);
        console.log(uniq(newMovies).slice(0, 100));
        setMovies(uniq(newMovies).slice(0, 100));
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div className="min-h-[80vh] w-full flex p-5">
      <div className="container mx-auto flex flex-col justify-around">
        <div className="h-full w-full flex flex-col justify-around">
          {/* HEADER */}
          <div className="">
            <h3 className="text-xl pb-2">TMDb Charts</h3>
            {/* CHART TITLE */}
            <h1 className="text-3xl">Most Popular movies</h1>
            {/* DESCRIPTION */}
            <p>As determined by TMDb Users</p>
          </div>

          <Divider />

          {loading ? (
            <div className="h-full w-full flex">
              <span>loading...</span>
            </div>
          ) : movies?.length ? (
            <div>
              <div className="pt-5 pb-5">
                <p className="text-base">{`Showing ${movies.length} Titles`}</p>
              </div>
              {/* RESULTS TABLE */}
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
            </div>
          ) : (
            <div className="min-h-[65vh]">
              <span>No results</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chart;
