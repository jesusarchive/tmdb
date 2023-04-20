import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { FormEvent, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Button, Form, Input, InputGroup, Navbar } from '../../components';
import { useStore } from '../../store/store';
import Footer from './footer';
import NavigationMenu from './navigation-menu';
import ThemeSwap from './theme-swap';
import UserMenu from './user-menu';

function Layout() {
  const { state, dispatch } = useStore();
  const navigate = useNavigate();
  const [currentSearchValue, setCurrentSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setCurrentSearchValue(value);
  };

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    setCurrentSearchValue('');
    navigate({
      pathname: '/find',
      search: `?q=${currentSearchValue}`
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between" data-theme={state.theme}>
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
          {state?.user?.token ? <UserMenu user={state.user} /> : <Button color="ghost">Sign In</Button>}

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
