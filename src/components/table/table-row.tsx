import clsx from 'clsx';
import React from 'react';

export interface TableRowProps extends React.TableHTMLAttributes<HTMLTableRowElement> {
  active?: boolean;
  hover?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ children, active, hover, className, ...props }) => {
  return (
    <tr
      {...props}
      className={clsx(className, {
        active,
        hover
      })}
    >
      {React.Children.map(children, (child, i) => (i < 1 ? <th key={i}>{child}</th> : <td key={i}>{child}</td>))}
    </tr>
  );
};

export default TableRow;
