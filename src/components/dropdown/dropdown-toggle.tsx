import React from 'react';

import Button from '../button/button';
import { Color, Size } from '../types';

export interface DropdownToggleProps extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'color'> {
  color?: Color;
  size?: Size;
  button?: boolean;
  disabled?: boolean;
}

const DropdownToggle: React.FC<DropdownToggleProps> = ({
  children,
  color,
  size,
  button = true,
  className,
  disabled,
  ...props
}) => {
  return (
    <label tabIndex={0} className={className} {...props}>
      {button ? (
        <Button color={color} size={size} disabled={disabled}>
          {children}
        </Button>
      ) : (
        children
      )}
    </label>
  );
};

export default DropdownToggle;
