/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';

export interface BreadcrumbsItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  href?: string;
}

const BreadcrumbsItem: React.FC<BreadcrumbsItemProps> = ({ children, href, ...props }) => {
  return (
    <li role="link" {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </li>
  );
};

export default BreadcrumbsItem;
