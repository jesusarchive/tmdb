import clsx from 'clsx';
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  bordered?: boolean;
  borderOffset?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ bordered = true, borderOffset, color, className, ...props }) => {
  return (
    <textarea
      {...props}
      className={clsx('textarea', className, {
        [`textarea-${color}`]: color,
        [`focus:outline-offset-0`]: !borderOffset,
        'textarea-bordered': bordered
      })}
    ></textarea>
  );
};

export default Textarea;
