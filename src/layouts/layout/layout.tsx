import React from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';

function Layout() {
  const navigation = useNavigation();

  return (
    <div>
      <div style={{ position: 'fixed', top: 0, right: 0 }}>
        {navigation.state !== 'idle' && <p>Navigation in progress...</p>}
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Layout;
