import clsx from 'clsx';
import React from 'react';

import DropdownItem from './dropdown-item';
import DropdownMenu from './dropdown-menu';
import DropdownToggle from './dropdown-toggle';

export interface DropdownProps extends React.HTMLAttributes<HTMLElement> {
  item?: React.ReactNode;
  horizontal?: 'left' | 'center' | 'right';
  vertical?: 'top' | 'middle' | 'end';
  hover?: boolean;
  open?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  className,
  item,
  horizontal,
  vertical,
  hover,
  open,
  ...props
}) => {
  return (
    <div
      {...props}
      role="listbox"
      className={clsx('dropdown', className, {
        [`dropdown-${horizontal}`]: horizontal,
        [`dropdown-${vertical}`]: vertical,
        'dropdown-hover': hover,
        'dropdown-open': open
      })}
    >
      <label tabIndex={0}>{children}</label>
      <ul className="dropdown-content">{item}</ul>
    </div>
  );
};

export default Object.assign(Dropdown, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem
});
