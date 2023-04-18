/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React from 'react';

import BreadcrumbsItem from './breadcrumbs-item';

type BreadcrumbsProps = React.HTMLAttributes<HTMLDivElement>;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={clsx('breadcrumbs', 'text-sm', className)}>
      <ul>{children}</ul>
    </div>
  );
};

export default Object.assign(Breadcrumbs, { Item: BreadcrumbsItem });
