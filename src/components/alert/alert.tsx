import clsx from 'clsx';
import React from 'react';

import { Status } from '../types';

export interface AlertProps extends React.HTMLAttributes<HTMLElement> {
  icon?: React.ReactNode;
  status?: Status;
  innerClassName?: string;
}

const Alert: React.FC<AlertProps> = ({ children, icon, status, className, innerClassName, ...props }) => {
  return (
    <div role="alert" {...props} className={clsx('alert', className, { [`alert-${status}`]: status })}>
      <div className={clsx('flex-1', innerClassName)}>
        {icon}
        {children}
      </div>
    </div>
  );
};

export default Alert;
