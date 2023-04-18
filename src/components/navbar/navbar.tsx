/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React from 'react';

import NavbarSection, { NavbarSectionProps } from './navbar-section';

type NavbarProps = React.HTMLAttributes<HTMLDivElement>;

const Navbar: React.FC<NavbarProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={clsx('navbar', className)}>
      {children}
    </div>
  );
};

// TODO: Review navbar sections
const NavbarStart: React.FC<Omit<NavbarSectionProps, 'section'>> = (props) => (
  <NavbarSection {...props} section="start" />
);

const NavbarCenter: React.FC<Omit<NavbarSectionProps, 'section'>> = (props) => (
  <NavbarSection {...props} section="center" />
);

const NavbarEnd: React.FC<Omit<NavbarSectionProps, 'section'>> = (props) => (
  <NavbarSection {...props} section="start" />
);

export default Object.assign(Navbar, {
  Start: NavbarStart,
  Center: NavbarCenter,
  End: NavbarEnd
});
