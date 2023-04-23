import { Bars3Icon } from '@heroicons/react/24/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Dropdown } from '../../components';

const NavigationMenu = () => {
  const navigate = useNavigate();

  return (
    <Dropdown>
      <Button className="w-20" shape="square" color="ghost" startIcon={<Bars3Icon className="h-6 w-6" />}>
        <span className="hidden lg:flex">Menu</span>
      </Button>
      <Dropdown.Menu className="w-52 menu-compact">
        <Dropdown.Item onClick={() => navigate({ pathname: '/chart/popular' })}>Most Popular Movies</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavigationMenu;
