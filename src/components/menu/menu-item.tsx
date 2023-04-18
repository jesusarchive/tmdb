import clsx from 'clsx';
import React from 'react';

export interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  disabled?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ className, disabled, ...props }) => {
  return (
    <li
      role="menuitem"
      className={clsx(className, {
        disabled
      })}
      {...props}
    />
  );
};

export default MenuItem;
