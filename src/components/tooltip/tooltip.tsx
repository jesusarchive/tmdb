import clsx from 'clsx';
import React from 'react';

import { Color, Position } from '../types';

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  open?: boolean;
  color?: Color;
  position?: Position;
}

const Tooltip: React.FC<TooltipProps> = ({ message, children, open, color, position, className, ...props }) => {
  return (
    <div
      role="tooltip"
      {...props}
      data-tip={message}
      className={clsx('tooltip', className, {
        'tooltip-open': open,
        [`tooltip-${color}`]: color,
        'tooltip-top': position === 'top',
        'tooltip-bottom': position === 'bottom',
        'tooltip-left': position === 'left',
        'tooltip-right': position === 'right'
      })}
    >
      {children}
    </div>
  );
};

export default Tooltip;
