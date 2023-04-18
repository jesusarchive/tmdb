import clsx from 'clsx';
import React from 'react';

import { Color } from '../types';

export interface StepProps extends React.LiHTMLAttributes<HTMLLIElement> {
  color?: Color;
}

const Step: React.FC<StepProps> = ({ children, color, className, ...props }) => {
  return (
    <li
      {...props}
      className={clsx('step', className, {
        [`step-${color}`]: color
      })}
    >
      {children}
    </li>
  );
};

export default Step;
