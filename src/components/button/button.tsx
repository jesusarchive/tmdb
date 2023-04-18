import clsx from 'clsx';
import React from 'react';

import { Color, Shape, Size } from '../types';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  shape?: Shape;
  size?: Size;
  variant?: 'outline' | 'link';
  color?: Color;
  fullWidth?: boolean;
  responsive?: boolean;
  animation?: boolean;
  loading?: boolean;
  active?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  shape,
  size,
  variant,
  color,
  startIcon,
  endIcon,
  fullWidth,
  responsive,
  animation = true,
  loading,
  active,
  disabled,
  className,
  ...props
}) => {
  const classes = clsx('btn', className, ((startIcon && !loading) || endIcon) && 'gap-2', {
    [`btn-${size}`]: size,
    [`btn-${shape}`]: shape,
    [`btn-${variant}`]: variant,
    [`btn-${color}`]: color,
    'btn-block': fullWidth,
    'btn-xs md:btn-sm lg:btn-md xl:btn-lg': responsive,
    'no-animation': !animation,
    'btn-active': active,
    'btn-disabled': disabled,
    loading
  });

  if (href) {
    return (
      <a className={classes} href={href}>
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
      </a>
    );
  }

  return (
    <button {...props} className={classes} disabled={disabled}>
      {startIcon && !loading && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
};

export default Button;
