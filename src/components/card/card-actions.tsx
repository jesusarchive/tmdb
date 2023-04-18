/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React from 'react';

type CardActionsProps = React.HTMLAttributes<HTMLDivElement>;

const CardActions: React.FC<CardActionsProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={clsx('card-actions', className)}>
      {children}
    </div>
  );
};

export default CardActions;
