import clsx from 'clsx';
import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  title?: string;
}

const Label: React.FC<LabelProps> = ({ children, title, className, ...props }) => {
  return (
    <label {...props} className={clsx('label', className)}>
      <span className="label-text cursor-pointer">{title}</span>
      {children}
    </label>
  );
};

export default Label;
