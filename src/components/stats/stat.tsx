/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React from 'react';

import StatItem from './stat-item';

export type StatProps = React.HTMLAttributes<HTMLDivElement>;

const Stat: React.FC<StatProps> = ({ className, ...props }) => {
  return <div {...props} className={clsx('stat', className)} />;
};

export default Object.assign(Stat, { Item: StatItem });
