/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/prop-types */
import React from 'react';

export type DropdownItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const DropdownItem: React.FC<DropdownItemProps> = ({ className, ...props }) => {
  return (
    <li className={className}>
      <a {...props}></a>
    </li>
  );
};

export default DropdownItem;
