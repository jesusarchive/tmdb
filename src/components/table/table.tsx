import clsx from 'clsx';
import React from 'react';

import TableBody from './table-body';
import TableFooter from './table-footer';
import TableHead from './table-head';
import TableRow from './table-row';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  compact?: boolean;
  zebra?: boolean;
}

const Table: React.FC<TableProps> = ({ children, compact, zebra, className, ...props }) => {
  return (
    <table
      {...props}
      className={clsx('table', className, {
        'table-zebra': zebra,
        'table-compact': compact
      })}
    >
      {children}
    </table>
  );
};

export default Object.assign(Table, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Footer: TableFooter
});
