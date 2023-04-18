import clsx from 'clsx';
import React from 'react';

const horizontalOptions = {
  start: 'toast-start',
  center: 'toast-center',
  end: 'toast-end'
};

const verticalOptions = {
  top: 'toast-top',
  middle: 'toast-middle',
  bottom: 'toast-bottom'
};

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  horizontal?: keyof typeof horizontalOptions;
  vertical?: keyof typeof verticalOptions;
  className?: string;
}

const Toast: React.FC<ToastProps> = ({ horizontal = 'end', vertical = 'bottom', className, children, ...props }) => {
  return (
    <div {...props} className={clsx('toast', horizontalOptions[horizontal], verticalOptions[vertical], className)}>
      {children}
    </div>
  );
};

export default Toast;
