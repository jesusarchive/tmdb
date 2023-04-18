/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React from 'react';

type ModalHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={clsx('w-full mb-8 text-xl', className)}>
      {children}
    </div>
  );
};

export default ModalHeader;
