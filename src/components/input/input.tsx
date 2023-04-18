import clsx from 'clsx';
import React from 'react';

import { Color, Size } from '../types';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  bordered?: boolean;
  borderOffset?: boolean;
  size?: Size;
  color?: Color;
}

const Input: React.FC<InputProps> = ({ bordered = true, borderOffset, size, color, className, ...props }) => {
  return (
    <input
      {...props}
      className={clsx('input', className, {
        [`input-${size}`]: size,
        [`input-${color}`]: color,
        [`focus:outline-offset-0`]: !borderOffset,
        'input-bordered': bordered
      })}
    />
  );
};

export default Input;
