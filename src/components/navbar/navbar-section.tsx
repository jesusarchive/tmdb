import clsx from 'clsx';
import React from 'react';

export interface NavbarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  section: 'start' | 'center' | 'end';
}

const NavbarSection: React.FC<NavbarSectionProps> = ({ children, section, className, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(className, {
        ['flex-1']: section !== 'center',
        [`navbar-${section}`]: section
      })}
    >
      {children}
    </div>
  );
};

export default NavbarSection;
