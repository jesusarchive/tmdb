import clsx from 'clsx';
import React from 'react';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ vertical, children, className, ...props }) => {
  return (
    <div
      {...props}
      className={clsx('btn-group', className, {
        'btn-group-vertical': vertical
      })}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;
