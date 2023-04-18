/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React from 'react';

import Label from './label';

export type FormProps = React.HTMLAttributes<HTMLFormElement>;

const Form: React.FC<FormProps> = ({ children, className, ...props }) => {
  return (
    <form {...props} className={clsx('form-control', className)}>
      {children}
    </form>
  );
};

export default Object.assign(Form, { Label });
