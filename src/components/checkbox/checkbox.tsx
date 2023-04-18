import clsx from 'clsx';
import React from 'react';

import { Color, Size } from '../types';

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  color?: Color;
  size?: Size;
  indeterminate?: boolean;
};

const Checkbox = ({ color, size, indeterminate, className, ...props }: CheckboxProps): JSX.Element => {
  return (
    <input
      {...props}
      type="checkbox"
      className={clsx('checkbox', className, {
        [`checkbox-${size}`]: size,
        [`checkbox-${color}`]: color
      })}
    />
  );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
