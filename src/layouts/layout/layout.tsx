import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { FormEvent, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Button, Form, Input, InputGroup, Navbar } from '../../components';
import { createGuestSession } from '../../services/auth/auth';
import { getAllGuestSessionRatedMovies } from '../../services/movie';
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

  const handleSignIn = async () => {
    setLoading(true);
    const data = await createGuestSession();
    if (data) {
      const allGuestSessionRatedMovies = await getAllGuestSessionRatedMovies(data.guest_session_id);
      const guestData = { ...data, rated_movies: allGuestSessionRatedMovies };
      dispatch(addGuestSession(guestData));
    }
    setLoading(false);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      {/* NAVBAR */}
      <Navbar className="h-[6vh] flex justify-between p-10 bg-base-100 shadow mb-5">
        <Navbar.Start>
          {/* HOME BUTTON */}
          <Button className="text-2xl normal-case" color="ghost" onClick={() => navigate({ pathname: '/' })}>
            TMDb
          </Button>
        </Navbar.Start>

        <Navbar.Center className="flex w-3/6 space-x-4 justify-center">
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
        </Navbar.Center>

        <Navbar.End className="flex justify-end space-x-4">
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
        </Navbar.End>
      </Navbar>

      {/* OUTLET */}
      <Outlet />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Layout;
