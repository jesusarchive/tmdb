/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from 'clsx';
import React from 'react';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  side: React.ReactNode;
  open?: boolean;
  mobile?: boolean;
  end?: boolean;
  toggleClassName?: string;
  contentClassName?: string;
  sideClassName?: string;
  overlayClassName?: string;
  onClickOverlay?: () => void;
}

const Drawer: React.FC<DrawerProps> = ({
  children,
  side,
  open,
  mobile,
  end,
  className,
  toggleClassName,
  contentClassName,
  sideClassName,
  overlayClassName,
  onClickOverlay,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx('drawer', className, {
        'drawer-mobile': mobile,
        'drawer-end': end
      })}
    >
      <input type="checkbox" className={clsx('drawer-toggle', toggleClassName)} checked={open} readOnly />
      <div className={clsx('drawer-content', contentClassName)}>{children}</div>
      <div className={clsx('drawer-side', sideClassName)}>
        <label className={clsx('drawer-overlay', overlayClassName)} onClick={onClickOverlay}></label>
        {side}
      </div>
    </div>
  );
};

export default Drawer;
