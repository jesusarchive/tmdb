import { ChevronDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { Button } from '../../components';
import { IMAGE_BASE_URL } from '../../services/helpers/constants';
import { getMoviesBySearch, MovieType } from '../../services/movie';
import { uniq } from '../../utils';

/**
 *
 * View with a list of search results
 *
 */
const Find = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(-1);
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([] as Array<MovieType>);
  const [loadingMore, setLoadingMore] = useState(false);

  // const getMovieStars = async (movieId: number): Promise<CastType[]> => {
  //   const movieCredits = await getMovieCredits(Number(movieId));

  //   return movieCredits.cast.slice(0, 2);
  // };

  const handleNextPageClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (search) {
        setMovies([]);
        setPage(1);
        const data = await getMoviesBySearch(page, search);
        console.log(data);
        setMaxPage(data.total_pages);

        setMovies(data.results);
      }
      setLoading(false);
    })();
  }, [search]);

  useEffect(() => {
    const newSearch = searchParams.get('q');
    setSearch(newSearch || '');
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      if (page > 1 && movies?.length && page <= maxPage) {
        setLoadingMore(true);
        const data = await getMoviesBySearch(page, search);
        console.log(data);
        setMaxPage(data.total_pages);
        console.log(uniq(movies.concat(data.results)));
        setTimeout(() => {
          setMovies(uniq(movies.concat(data.results)));
          setLoadingMore(false);
        }, 1000);
      }
    })();
  }, [page]);

  return (
    <div className="min-h-[80vh] w-full flex p-5">
      <div className="container mx-auto flex flex-col">
        <div className="pb-20">
          {/* HEADING */}
          {search ? (
            <h1 className="text-6xl">{`Search "${search}"`}</h1>
          ) : (
            <>
              <h1 className="text-5xl pb-4">Search TMDb</h1>
              <p className="text-lg">
                Search TMDb by typing a word or phrase in the search box at the top of this page.
              </p>
            </>
          )}
        </div>

        {loading ? (
          // LOADING
          <div className="h-full w-full flex">
            <span>loading...</span>
          </div>
        ) : search ? (
          <>
            {/* RESULT LIST */}
            <h3 className="text-4xl font-bold border-l-4 border-primary pl-3">Titles</h3>
            <div className="border-2 border-base-200 p-4 mt-8">
              {movies?.length ? (
                <div>
                  <ul>
                    {movies?.map((movie, i) => (
                      <li
                        className={clsx('w-full h-24 flex justify-start space-x-2 border-base-200 pt-1 border-b-2')}
                        key={movie.id}
                      >
                        {/* POSTER */}
                        <div className="w-14">
                          <Link to={`/title/${movie.id}`}>
                            <img className="w-full" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="poster" />
                          </Link>
                        </div>
                        <div className="h-18 max-w-[90%] flex flex-col">
                          <div className="flex flex-col">
                            {/* TITLE */}
                            <Link className="link" to={`/title/${movie.id}`}>
                              {movie.title}
                            </Link>
                            {/* YEAR */}
                            {movie.release_date && <span>{`${new Date(movie.release_date).getFullYear()}`}</span>}
                          </div>

                          {/* DESCRIPTION */}
                          <div className="text-md">
                            <p className="text-neutral-500 overflow-hidden whitespace-nowrap text-ellipsis">
                              {movie.overview}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {page < maxPage && (
                    <div className="pt-2">
                      <Button
                        className="normal-case"
                        color="ghost"
                        endIcon={!loadingMore && <ChevronDownIcon className="h-6 w-6" />}
                        onClick={handleNextPageClick}
                        loading={loadingMore}
                      >
                        {!loadingMore && 'More matches'}
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                // NO RESULTS
                <div className="p-5">
                  <span>{`No results found for "${search}"`}</span>
                </div>
              )}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Find;
