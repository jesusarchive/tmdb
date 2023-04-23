import React, { useEffect, useState } from 'react';

import { Divider } from '../../components';
import { getPopularMovies, MovieType } from '../../services/movie';
import { uniq } from '../../utils';
import Chart from './chart';
import { API_RESULTS_PER_PAGE, NUMBER_OF_POPULAR_MOVIES_TO_SHOW } from './contants';
import Header from './header';

const PopularMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([] as Array<MovieType>);
  const title = 'TMDb Charts';
  const subtitle = 'Most Popular movies';
  const description = 'As determined by TMDb Users';

  const loadNPopularMovies = async (n = NUMBER_OF_POPULAR_MOVIES_TO_SHOW) => {
    setLoading(true);
    const neededPages = n / API_RESULTS_PER_PAGE + 1;
    const popularMoviesRaw = await Promise.all(
      [...Array(neededPages).keys()].map(async (_, index) => await getPopularMovies(index + 1))
    );
    const mappedPopularMovies = popularMoviesRaw.reduce(
      (acc, el) => acc.concat(el?.results || []),
      [] as Array<MovieType>
    );
    // api sends duplicated movies
    const filteredMovies = uniq(mappedPopularMovies).slice(0, n);
    setMovies(filteredMovies);
    setLoading(false);
  };

  const init = async () => {
    await loadNPopularMovies(NUMBER_OF_POPULAR_MOVIES_TO_SHOW);
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
          <Header title={title} subtitle={subtitle} description={description} />

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
              <Chart titles={movies} />
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

export default PopularMovies;
