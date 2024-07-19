import React from "react";

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column, index) => (
          <th className="px-6 py-3" key={index}>
            <div className="text-gray-2 text-left uppercase tracking-wider text-xs">
              {column.header}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
