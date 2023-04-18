import clsx from 'clsx';
import React from 'react';

import Step from './step';

export interface StepsProps extends React.HTMLAttributes<HTMLUListElement> {
  vertical?: boolean;
  horizontal?: boolean;
}

const Steps: React.FC<StepsProps> = ({ children, className, vertical, horizontal, ...props }) => {
  return (
    <ul
      {...props}
      className={clsx('steps', className, {
        ['steps-vertical']: vertical,
        ['steps-horizontal']: horizontal
      })}
    >
      {children}
    </ul>
  );
};

export default Object.assign(Steps, { Step });
