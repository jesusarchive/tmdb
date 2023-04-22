import React, { useEffect, useState } from 'react';

import { Divider } from '../../components';
import { getPopularMovies, MovieType } from '../../services/movie';
import { uniq } from '../../utils';
import MovieTable from './movie-table';

const PopularMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([] as Array<MovieType>);

  const load100PopularMovies = async () => {
    setLoading(true);
    // total movies to show
    const TOTAL = 100;
    // api results per page
    const RESULTS_PER_PAGE = 20;
    const neededPages = TOTAL / RESULTS_PER_PAGE + 1;
    const popularMoviesRaw = await Promise.all(
      [...Array(neededPages).keys()].map(async (_, index) => await getPopularMovies(index + 1))
    );
    const mappedPopularMovies = popularMoviesRaw.reduce((acc, el) => acc.concat(el.results), [] as Array<MovieType>);
    // api sends duplicated movies
    const filteredMovies = uniq(mappedPopularMovies).slice(0, TOTAL);
    setMovies(filteredMovies);
    setLoading(false);
  };

  const init = async () => {
    await load100PopularMovies();
  };

  useEffect(() => {
    (async () => {
      await init();
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
            // LOADING
            <div className="h-full w-full flex">
              <span>loading...</span>
            </div>
          ) : movies?.length ? (
            // RESULTS
            <div>
              {/* SHOW MESSAGE */}
              <div className="pt-5 pb-5">
                <p className="text-base">{`Showing ${movies.length} Titles`}</p>
              </div>
              {/* TITLES TABLE */}
              <MovieTable titles={movies} />
            </div>
          ) : (
            // NO RESULTS
            <div className="min-h-[65vh]">
              <span>No results</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
