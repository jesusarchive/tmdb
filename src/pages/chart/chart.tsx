import React, { useEffect, useState } from 'react';

import { Divider } from '../../components';
import { getPopularMovies, MovieType } from '../../services/movie';
import { uniq } from '../../utils';
import TitlesTable from './titles-table';

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
      if (data.total_pages >= 6) {
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
              <TitlesTable movies={movies} />
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

export default Chart;
