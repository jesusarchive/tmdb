import clsx from 'clsx';
import React from 'react';

import { Size } from '../types';

export interface InputGroupProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: Size;
  vertical?: boolean;
}

const InputGroup: React.FC<InputGroupProps> = ({ children, size, vertical, className, ...props }) => {
  return (
    <label
      {...props}
      className={clsx('input-group', className, {
        [`input-group-${size}`]: size,
        'input-group-vertical': vertical
      })}
    >
      {children}
    </label>
  );
};

export default InputGroup;
