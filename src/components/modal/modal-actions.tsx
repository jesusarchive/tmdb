/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React from 'react';

type ModalActionsProps = React.HTMLAttributes<HTMLDivElement>;

const ModalActions: React.FC<ModalActionsProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={clsx('modal-action', className)}>
      {children}
    </div>
  );
};

export default ModalActions;
