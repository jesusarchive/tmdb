import React from 'react';

export type TableBodyProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

const TableBody: React.FC<TableBodyProps> = ({ children, ...props }) => {
  return <tbody {...props}>{children}</tbody>;
};

export default TableBody;
