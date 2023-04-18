import React from 'react';

export type TableFooterProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

const TableFooter: React.FC<TableFooterProps> = ({ children, ...props }) => {
  return (
    <tfoot {...props}>
      <tr>
        {React.Children.map(children, (child, i) => (
          <th key={i}>{child}</th>
        ))}
      </tr>
    </tfoot>
  );
};

export default TableFooter;
