import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { Button } from '../../components';
import { IMAGE_BASE_URL } from '../../services/helpers/constants';
import { getMoviesBySearch, MovieType } from '../../services/movie';

const Find = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(-1);
  const [currentSearchValue, setCurrentSearchValue] = useState('');
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([] as Array<MovieType>);

  const handleSearchInputChange = (value: string) => {
    setCurrentSearchValue(value);
  };

  const handleSearchClick = () => {
    setCurrentSearchValue('');
    setSearch(currentSearchValue);
    setSearchParams({ ...searchParams, q: currentSearchValue });
  };

  // const getMovieStars = async (movieId: number): Promise<CastType[]> => {
  //   const movieCredits = await getMovieCredits(Number(movieId));

  //   return movieCredits.cast.slice(0, 2);
  // };

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (search) {
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
    if (newSearch) {
      setCurrentSearchValue('');
      setSearch(newSearch);
    }
  }, [searchParams]);

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
                value={currentSearchValue}
                onChange={(e) => handleSearchInputChange(e.target.value)}
              />
              <Button className="btn btn-square" onClick={handleSearchClick}>
                <MagnifyingGlassIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="pb-20">
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
            <div className="h-full w-full flex">
              <span>loading...</span>
            </div>
          ) : search ? (
            <>
              <h3 className="text-4xl font-bold border-l-4 border-primary pl-3">Titles</h3>
              <ul className="border-2 border-base-200 p-4 mt-8">
                {movies?.map((movie, i) => (
                  <li
                    className={clsx('w-full h-24 flex space-x-2 border-base-200 pt-1', i !== 0 && ' border-t-2')}
                    key={movie.id}
                  >
                    {/* POSTER */}
                    <div>
                      <Link to={`/title/${movie.id}`}>
                        <img className="w-14" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="poster" />
                      </Link>
                    </div>
                    {/* TITLE */}
                    <div className="flex flex-col">
                      <Link className="link-info" to={`/title/${movie.id}`}>
                        {movie.title}
                      </Link>
                      <span>{`(${new Date(movie.release_date).getFullYear()})`}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Find;
