import clsx from 'clsx';
import React from 'react';

export interface StatItemProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'title' | 'value' | 'desc' | 'figure';
}

const StatItem: React.FC<StatItemProps> = ({ variant, className, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(className, {
        [`stat-${variant}`]: variant
      })}
    />
  );
};

export default StatItem;
