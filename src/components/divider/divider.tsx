import clsx from 'clsx';
import React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
}

const Divider: React.FC<DividerProps> = ({ children, vertical, className, ...props }) => {
  return (
    <div
      role="separator"
      {...props}
      className={clsx('divider', className, {
        'divider-vertical': vertical
      })}
    >
      {children}
    </div>
  );
};

export default Divider;
