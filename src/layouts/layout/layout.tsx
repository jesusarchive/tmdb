import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { FormEvent, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Button, Form, Input, InputGroup, Navbar } from '../../components';
import { getGuestSession } from '../../services/auth/auth';
import { getGuestSessionRatedMovies, RatedMovieType } from '../../services/movie';
import { useStore } from '../../store';
import { addGuestSession } from '../../store/actions';
import Footer from './footer';
import NavigationMenu from './navigation-menu';
import ThemeSwap from './theme-swap';
import UserMenu from './user-menu';

function Layout() {
  const { state, dispatch } = useStore();
  const navigate = useNavigate();
  const [currentSearchValue, setCurrentSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (value: string) => {
    setCurrentSearchValue(value);
  };

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    setCurrentSearchValue('');
    navigate({
      pathname: '/search',
      search: `?q=${currentSearchValue}`
    });
  };

  // TODO: FIX DUPLICATED FUNCTION IN PAGES
  const getAllGuestSessionRatedMovies = async (id: string) => {
    let ratedMovies = [];
    const data = await getGuestSessionRatedMovies(id, 1);
    ratedMovies = data.results;

    if (data.total_pages > 1) {
      const allPagesData = await Promise.all(
        [...Array(data.total_pages).keys()].map(async (_, index) =>
          index + 1 === 1 ? data : await getGuestSessionRatedMovies(id, index + 1)
        )
      );
      const mappedRatings = allPagesData.reduce((acc, el) => acc.concat(el.results), [] as Array<RatedMovieType>);
      ratedMovies = mappedRatings;
    }

    return ratedMovies;
  };

  const handleSignIn = async () => {
    setLoading(true);
    const data = await getGuestSession();
    const allGuestSessionRatedMovies = await getAllGuestSessionRatedMovies(data.guest_session_id);
    const guestData = { ...data, rated_movies: allGuestSessionRatedMovies };
    dispatch(addGuestSession(guestData));
    setLoading(false);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      {/* NAVBAR */}
      <Navbar className="h-[6vh] flex justify-between p-10 bg-base-100 shadow mb-5">
        <div>
          {/* HOME BUTTON */}
          <Button className="text-2xl normal-case" color="ghost" onClick={() => navigate({ pathname: '/' })}>
            TMDb
          </Button>
        </div>

        <div className="w-3/6 space-x-4 flex justify-center">
          {/* MENU */}
          <NavigationMenu />

          {/* SEARCH INPUT */}
          <Form className="w-full" onSubmit={handleSearchSubmit}>
            <InputGroup className="input-group w-full">
              <Input
                className="w-full"
                type="text"
                placeholder="Search…"
                bordered
                value={currentSearchValue}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
              <Button className="btn btn-square">
                <MagnifyingGlassIcon className="h-6 w-6" />
              </Button>
            </InputGroup>
          </Form>
        </div>

        <div className="flex justify-end space-x-4">
          {/* LOGIN/USER MENU */}
          {state?.guest ? (
            <UserMenu user={state.guest} />
          ) : (
            <Button color="ghost" loading={loading} onClick={handleSignIn}>
              Sign In
            </Button>
          )}

          {/* THEME SWAP*/}
          <ThemeSwap />
        </div>
      </Navbar>

      {/* OUTLET */}
      <Outlet />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Layout;
