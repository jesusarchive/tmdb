import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { FormEvent, useState } from 'react';
import { Outlet, useNavigate, useNavigation } from 'react-router-dom';

import { Button, Dropdown, Form, Input, InputGroup, Navbar } from '../../components';

function Layout() {
  const [currentSearchValue, setCurrentSearchValue] = useState('');
  const navigation = useNavigation();
  const navigate = useNavigate();

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
    <div className="min-h-screen w-full flex flex-col justify-between">
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chart/popular">Most Popular Movies</Link>
          </li>
          <li>
            <Link to="/find">Search</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <hr /> */}

      <Navbar className="h-[6vh] flex justify-between p-3 bg-base-100 shadow mb-5">
        <Button className="text-xl normal-case" color="ghost" onClick={() => navigate({ pathname: '/' })}>
          TMDb
        </Button>
        <Form onSubmit={handleSearchSubmit}>
          <InputGroup className="input-group">
            <Input
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
        <Dropdown vertical="end">
          <Button color="ghost" className="avatar" shape="circle">
            <div className="w-10 rounded-full">
              <img src="https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg" />
            </div>
          </Button>
          <Dropdown.Menu className="w-52 menu-compact">
            <Dropdown.Item>Your watchlist</Dropdown.Item>
            <Dropdown.Item>Your ratings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>

      <Outlet />

      <footer className="h-[5vh] footer footer-center p-4 bg-base-300 text-base-content mt-20">
        <div>
          <p>Copyright © 2023 - All right reserved by TEST Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
