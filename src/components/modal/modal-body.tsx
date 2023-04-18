/* eslint-disable react/prop-types */
import React from 'react';

type ModalBodyProps = React.HTMLAttributes<HTMLDivElement>;

const ModalBody: React.FC<ModalBodyProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};

export default ModalBody;
