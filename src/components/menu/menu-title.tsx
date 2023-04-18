/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React from 'react';

export type MenuTitleProps = React.LiHTMLAttributes<HTMLLIElement>;

const MenuTitle: React.FC<MenuTitleProps> = ({ className, ...props }) => {
  return <li {...props} className={clsx('menu-title', className)} />;
};

export default MenuTitle;
