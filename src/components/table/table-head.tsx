import React from 'react';

export type TableHeadProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

const TableHead: React.FC<TableHeadProps> = ({ children, ...props }) => {
  return (
    <thead {...props}>
      <tr>
        {React.Children.map(children, (child, i) => (
          <th key={i}>{child}</th>
        ))}
      </tr>
    </thead>
  );
};
export default TableHead;
