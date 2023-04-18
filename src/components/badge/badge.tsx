import clsx from 'clsx';
import React from 'react';

import { Color, Size } from '../types';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'outline';
  size?: Size;
  color?: Color;
  responsive?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ children, variant, size, color, responsive, className, ...props }) => {
  return (
    <span
      {...props}
      className={clsx('badge', className, {
        [`badge-${size}`]: size,
        [`badge-${variant}`]: variant,
        [`badge-${color}`]: color,
        'badge-xs md:badge-sm lg:badge-md xl:badge-lg': responsive
      })}
    >
      {children}
    </span>
  );
};

export default Badge;
