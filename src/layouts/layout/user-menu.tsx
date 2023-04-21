import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Dropdown } from '../../components';
import { GuestProps } from '../../store/store';

export type UserMenuProps = {
  user: GuestProps;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Dropdown vertical="end">
      <Button color="ghost" className="avatar" shape="circle">
        <div className="w-10 rounded-full">
          <img src="https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg" alt="user" />
        </div>
        <span className="ml-2">{`GUEST${user.guest_session_id.slice(0, 8)}`}</span>
      </Button>
      <Dropdown.Menu className="w-52 menu-compact">
        <Dropdown.Item onClick={() => navigate({ pathname: '/user/guest/watchlist' })}>Your watchlist</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate({ pathname: '/user/guest/ratings' })}>Your ratings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserMenu;
