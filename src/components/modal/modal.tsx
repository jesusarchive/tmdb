/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import clsx from 'clsx';
import React from 'react';

import ModalActions from './modal-actions';
import ModalBody from './modal-body';
import ModalHeader from './modal-header';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  responsive?: boolean;
  onClickBackdrop?: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, open, responsive, onClickBackdrop, className, ...props }) => {
  return (
    <div
      className={clsx('modal', {
        'modal-open': open,
        'modal-bottom sm:modal-middle': responsive
      })}
      onClick={(e) => {
        e.stopPropagation();
        if (e.target === e.currentTarget) {
          e.stopPropagation();
          if (onClickBackdrop) {
            onClickBackdrop();
          }
        }
      }}
    >
      <div {...props} className={clsx('modal-box', className)}>
        {children}
      </div>
    </div>
  );
};

export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Actions: ModalActions
});
