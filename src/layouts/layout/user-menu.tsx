import React from 'react';

import { Button, Dropdown } from '../../components';
import { UserType } from '../../store/types';

export type UserMenuProps = {
  user: UserType;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  return (
    <Dropdown vertical="end">
      <Button color="ghost" className="avatar" shape="circle">
        <div className="w-10 rounded-full">
          <img src={user.image} alt="user" />
        </div>
        <span className="ml-2">{user.name}</span>
      </Button>
      <Dropdown.Menu className="w-52 menu-compact">
        <Dropdown.Item>Your watchlist</Dropdown.Item>
        <Dropdown.Item>Your ratings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserMenu;
