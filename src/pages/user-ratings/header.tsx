import { LockClosedIcon } from '@heroicons/react/24/solid';
import React from 'react';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="pb-5">
      <h1 className="text-3xl font-bold">Your Ratings</h1>
      <div className="flex itemx-center space-x-2 pt-1 text-neutral-500">
        <LockClosedIcon className="h-6 w-6" />
        <span>Private</span>
      </div>
    </div>
  );
};

export default Header;
