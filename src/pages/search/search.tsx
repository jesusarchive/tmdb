import { ChevronDownIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Button } from '../../components';
import { getMoviesBySearch, MovieType } from '../../services/movie';
import { uniq } from '../../utils';
import ResultList from './result-list';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(-1);
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([] as Array<MovieType>);
  const [loadingMore, setLoadingMore] = useState(false);

  const reset = () => {
    setMovies([]);
    setPage(1);
  };

  const handleNextPageClick = () => {
    setPage(page + 1);
  };

  const loadSearchResults = async () => {
    const data = await getMoviesBySearch(page, search);
    setMaxPage(data.total_pages);
    setMovies(data.results);
  };

  const loadMoreSearchResults = async () => {
    setLoadingMore(true);
    const data = await getMoviesBySearch(page, search);
    setMaxPage(data.total_pages);

    // Add timeout for loading animation
    setTimeout(() => {
      setMovies(uniq(movies.concat(data.results)));
      setLoadingMore(false);
    }, 1000);
  };

  const handleSearchChange = async () => {
    setLoading(true);
    if (search) {
      reset();
      await loadSearchResults();
    }
    setLoading(false);
  };

  const handleSearchParamsChange = () => {
    const newSearch = searchParams.get('q') || '';
    setSearch(newSearch);
  };

  const handlePageChange = async () => {
    const isValidState = page > 1 && movies?.length && page <= maxPage;
    if (isValidState) {
      await loadMoreSearchResults();
    }
  };

  useEffect(() => {
    (async () => {
      await handleSearchChange();
    })();
  }, [search]);

  useEffect(handleSearchParamsChange, [searchParams]);

  useEffect(() => {
    (async () => {
      await handlePageChange();
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
            {/* RESULTS */}
            <h3 className="text-4xl font-bold border-l-4 border-primary pl-3">Titles</h3>
            <div className="border-2 border-base-200 p-4 mt-8">
              {movies?.length ? (
                <>
                  {/* TITLE LIST */}
                  <ResultList titles={movies} />

                  {/* LOAD MORE BUTTON */}
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
                </>
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

export default Search;
