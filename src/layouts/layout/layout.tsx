import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Button, Navbar } from '../../components';
import { useStore } from '../../store';
import Footer from './footer';
import ThemeSwap from './theme-swap';

function Layout() {
  const { state, dispatch } = useStore();
  const navigate = useNavigate();

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

        <Navbar.Center className="flex w-3/6 space-x-4 justify-center"></Navbar.Center>

        <Navbar.End className="flex justify-end space-x-4">
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
