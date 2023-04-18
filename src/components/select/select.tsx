import clsx from 'clsx';
import React from 'react';

import { Color, Size } from '../types';
import SelectOption from './select-option';

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value' | 'size'> {
  onChange?: (value: string | number | undefined) => void;
  value?: string | number | undefined;
  size?: Size;
  color?: Color;
  bordered?: boolean;
  borderOffset?: boolean;
}

const Select: React.FC<SelectProps> = ({
  children,
  value,
  onChange,
  size,
  color,
  bordered = true,
  borderOffset,
  className,
  ...props
}) => {
  return (
    <select
      {...props}
      className={clsx('select', className, {
        [`select-${size}`]: size,
        [`select-${color}`]: color,
        [`focus:outline-offset-0`]: !borderOffset,
        'select-bordered': bordered
      })}
      onChange={(e) => onChange?.(e.currentTarget.value)}
      value={value}
    >
      {children}
    </select>
  );
};

export default Object.assign(Select, { Option: SelectOption });
