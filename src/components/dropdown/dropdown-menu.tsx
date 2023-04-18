/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React from 'react';

export type DropdownMenuProps = React.HTMLAttributes<HTMLUListElement>;

const DropdownMenu: React.FC<DropdownMenuProps> = ({ className, ...props }) => {
  return (
    <ul
      {...props}
      tabIndex={0}
      className={clsx('dropdown-content menu p-2 shadow bg-base-100 rounded-box', className)}
    />
  );
};

export default DropdownMenu;
