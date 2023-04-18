import clsx from 'clsx';
import React from 'react';

import Stat from './stat';

export interface StatsProps extends React.HTMLAttributes<HTMLDivElement> {
  horizontal?: boolean;
  vertical?: boolean;
}

const Stats: React.FC<StatsProps> = ({ horizontal, vertical, className, children, ...props }) => {
  return (
    <div
      {...props}
      className={clsx('stats', className, {
        'stats-horizontal': horizontal,
        'stats-vertical': vertical
      })}
    >
      {children}
    </div>
  );
};

export default Object.assign(Stats, { Stat });
